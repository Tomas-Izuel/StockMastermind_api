import { Injectable } from '@nestjs/common';
import { OrderArticle } from './order-article';
import { order_article } from '@prisma/client';

@Injectable()
export class OrderArticleService {
  constructor(private orderArticleRepository: OrderArticle) {}

  async createManyOrderArticles(data: Omit<order_article, 'id'>[]) {
    const orderArticles = await this.orderArticleRepository.createMany(data);
    return orderArticles;
  }

  async getOrderArticlesByOrderId(orderId: number) {
    const orderArticles = await this.orderArticleRepository.findMany({
      order_id: orderId,
    });
    return orderArticles;
  }
}
