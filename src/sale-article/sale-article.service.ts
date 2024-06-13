import { Injectable } from '@nestjs/common';
import { SaleArticle } from './sale-article';
import { sale_article } from '@prisma/client';

@Injectable()
export class SaleArticleService {
  constructor(private saleArticleRepository: SaleArticle) {}

  async createManySaleArticles(data: Omit<sale_article, 'id'>[]) {
    return this.saleArticleRepository.createManySaleArticles(data);
  }
}
