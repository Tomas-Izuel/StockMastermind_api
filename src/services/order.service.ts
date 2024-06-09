import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaOrderRepository } from 'src/repositories/order.repository';
import { OrderArticleService } from './order-article.service';
import { OrderStatusService } from './order-status.service';

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
}
