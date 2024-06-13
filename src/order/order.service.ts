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
import { ProviderArticleService } from 'src/provider-article/provider-article.service';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: Order,
    private orderArticleService: OrderArticleService,
    private orderStatusService: OrderStatusService,
    private providerService: ProviderService,
    private providerArticleService: ProviderArticleService,
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
          data.articles.map((article: any) => article.article_id),
        );

      const subtotal = data.articles.reduce((acc: any, article: any) => {
        const articlePrice = articleWPrices.find(
          (articlePrice: any) => articlePrice.article_id === article.article_id,
        );

        return acc + articlePrice.price * article.quantity;
      }, 0);

      const order = await this.orderRepository.create({
        ...data,
        code: 'ORDER-' + new Date().getTime(),
        date: new Date(),
        provider_id: provider.id,
        shipment_count: provider.single_shipment_cost,
        status_id: status.id,
        subtotal: subtotal,
        total: subtotal + provider.single_shipment_cost,
      });

      await this.orderArticleService.createManyOrderArticles(
        data.articles.map((article: any) => ({
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

  async verifyIfOrderNeeded(article_id: number) {
    const article = await this.articleService.getArticleById(article_id);
    if (!article) {
      throw new Error('Article not found');
    }

    if (article.stock < article.order_point) {
      const provider = await this.providerService.getDefaulProvider();

      const articleProvider =
        await this.providerArticleService.getArticleByProviderAndArticleId(
          provider.id,
          article.id,
        );
      if (!provider || !articleProvider) {
        throw new Error('Provider or article not found');
      }

      const subtotal =
        articleProvider.price * (article.max_stock - article.stock);
      const order = await this.orderRepository.create({
        code: 'ORDER-' + new Date().getTime(),
        provider_id: provider.id,
        date: new Date(),
        status_id: 1,
        shipment_count: provider.single_shipment_cost,
        subtotal: subtotal,
        total: subtotal + provider.single_shipment_cost,
      });

      await this.orderArticleService.createManyOrderArticles([
        {
          article_id: article.id,
          order_id: order.id,
          quantity: article.max_stock - article.stock,
        },
      ]);

      return order;
    }
  }
}
