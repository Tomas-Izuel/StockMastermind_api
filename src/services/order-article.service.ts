import { Injectable } from '@nestjs/common';
import { order_article } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaOrderArticleRepository } from 'src/repositories/order-article.repository';

@Injectable()
export class OrderArticleService {
  orderArticle: PrismaOrderArticleRepository;
  constructor(private prismaService: PrismaService) {
    this.orderArticle = new PrismaOrderArticleRepository(prismaService);
  }

  async createManyOrderArticles(data: Omit<order_article, 'id'>[]) {
    const orderArticles = await this.orderArticle.createMany(data);
    return orderArticles;
  }
}
