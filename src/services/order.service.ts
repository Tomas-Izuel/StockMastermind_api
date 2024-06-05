import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaOrderArticleRepository } from 'src/repositories/order-article.repository';
import { PrismaOrderRepository } from 'src/repositories/order.repository';

@Injectable()
export class OrderService {
  orderArticle: PrismaOrderArticleRepository;
  order: PrismaOrderRepository;
  constructor(private prismaService: PrismaService) {}
}
