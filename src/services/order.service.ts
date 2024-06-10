import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaOrderRepository } from 'src/repositories/order.repository';
import { OrderArticleService } from './order-article.service';
import { OrderStatusService } from './order-status.service';
import { order } from '@prisma/client';
import { ProviderService } from './provider.service';
import { CreateOrderDto } from 'src/data/types/order';

@Injectable()
export class OrderService {
  orderRepository: PrismaOrderRepository;
  constructor(
    private prismaService: PrismaService,
    private orderArticleService: OrderArticleService,
    private orderStatusService: OrderStatusService,
    private providerService: ProviderService,
  ) {
    this.orderRepository = new PrismaOrderRepository(prismaService);
  }

  async createOrder(data: CreateOrderDto) {
    try {
      const status = await this.orderStatusService.getOrderStatusByName(
        process.env.BASE_ORDER_STATUS_ID,
      );

      const provider = data.provider_id
        ? await this.providerService.getProviderById(data.provider_id)
        : await this.providerService.getDefaulProvider();

      const articlePrices =
        await this.providerService.getArticlesPriceByProviderId(
          provider.id,
          data.articles.map((article) => article.article_id),
        );

      const subtotal = data.articles.reduce((acc, article) => {
        const price = articlePrices.find(
          (articlePrice) => articlePrice.article_id === article.article_id,
        ).price;

        return acc + price * article.quantity;
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
}
