import { Injectable } from '@nestjs/common';
import { OrderArticleDTO } from 'src/article/data/article.dto';
import { order_article } from '@prisma/client';
import { OrderArticle } from './order-article';

@Injectable()
export class OrderArticleService {
  constructor(private orderArticleRepository: OrderArticle) {}

  async createManyOrderArticles(data: Omit<OrderArticleDTO, 'id'>[]) {
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
