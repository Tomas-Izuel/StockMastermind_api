import { Injectable } from '@nestjs/common';
import { order_article, sale_article } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { OrderArticleRepository } from './data/order-article.types';

@Injectable()
export class OrderArticle {
  constructor(private prismaService: PrismaService) {}

  async createMany(data: Omit<order_article, 'id'>[]) {
    return this.prismaService.order_article.createMany({
      data: data.map((d) => ({ ...d })),
    });
  }

  async findMany(where: { order_id: number }) {
    return this.prismaService.order_article.findMany({
      where,
    });
  }
}
