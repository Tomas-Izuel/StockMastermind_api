import { Injectable } from '@nestjs/common';
import { Order } from './order';
import { OrderArticleService } from 'src/order-article/order-article.service';
import { OrderStatusService } from 'src/order-status/order-status.service';
import { ProviderService } from 'src/provider/provider.service';
import {
  BASE_ORDER_STATUS_ID,
  FINISHED_ORDER_STATUS_ID,
} from 'src/lib/constants';
import { CreateOrder } from './data/order.types';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: Order,
    private orderArticleService: OrderArticleService,
    private orderStatusService: OrderStatusService,
    private providerService: ProviderService,
    private articleService: ArticleService,
  ) {}

  async createOrder(data: CreateOrder) {
    try {
      const status = await this.orderStatusService.getOrderStatusByName(
        BASE_ORDER_STATUS_ID,
      );

      if (!status) {
        throw new Error('Status not found');
      }

      const provider = data.provider_id
        ? await this.providerService.getProviderById(data.provider_id)
        : await this.providerService.getDefaulProvider();

      if (!provider) {
        throw new Error('Provider not found');
      }

      const articleWPrices =
        await this.providerService.getArticlesPriceByProviderId(
          provider.id,
          data.articles.map((article) => article.article_id),
        );

      const subtotal = data.articles.reduce((acc, article) => {
        const articlePrice = articleWPrices.find(
          (articlePrice) => articlePrice.article_id === article.article_id,
        );

        return acc + articlePrice.price * article.quantity;
      }, 0);

      const order = await this.orderRepository.create({
        ...data,
        date: new Date(),
        provider_id: provider.id,
        shipment_count: provider.single_shipment_cost,
        status_id: status.id,
        subtotal: subtotal,
        total: subtotal + provider.single_shipment_cost,
      });

      await this.orderArticleService.createManyOrderArticles(
        data.articles.map((article) => ({
          ...article,
          order_id: order.id,
        })),
      );

      return order;
    } catch (error) {
      throw new Error('Error creating order: ' + error);
    }
  }

  async changeOrderStatus(orderId: number, statusId: number) {
    try {
      const status = await this.orderStatusService.getOrderStatusById(statusId);

      if (!status) {
        throw new Error('Status not found');
      }

      if (status.name === FINISHED_ORDER_STATUS_ID) {
        const order = await this.orderRepository.findOne(orderId);

        if (!order) {
          throw new Error('Order not found');
        }

        const articles =
          await this.orderArticleService.getOrderArticlesByOrderId(order.id);

        await Promise.all(
          articles.map(async (article) => {
            await this.articleService.addStock(
              article.article_id,
              article.quantity,
            );
          }),
        );
      }

      return this.orderRepository.update(orderId, { status_id: statusId });
    } catch (error) {
      throw new Error('Error changing order status: ' + error);
    }
  }
}
