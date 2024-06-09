import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaOrderRepository } from 'src/repositories/order.repository';
import { OrderArticleService } from './order-article.service';
import { OrderStatusService } from './order-status.service';
import { order } from '@prisma/client';

@Injectable()
export class OrderService {
  order: PrismaOrderRepository;
  constructor(
    private prismaService: PrismaService,
    private orderArticleService: OrderArticleService,
    private orderStatusService: OrderStatusService,
  ) {
    this.order = new PrismaOrderRepository(prismaService);
  }

  async createOrder(data: Omit<order, 'id' & 'status_id'>) {
    const status = await this.orderStatusService.getOrderStatusByName(
      process.env.BASE_ORDER_STATUS_ID,
    );

    const orderArticles = OrderArticleService;
  }
}
