import { Injectable } from '@nestjs/common';
import { sale } from '@prisma/client';
import { Sale } from './sale';
import { SaleArticleService } from 'src/sale-article/sale-article.service';
import { ArticleService } from 'src/article/article.service';
import { CreateSaleDto } from './data/sale.dto';

@Injectable()
export class SaleService {
  constructor(
    private saleRepository: Sale,
    private saleArticleService: SaleArticleService,
    private articleService: ArticleService,
  ) {}

  async findAll() {
    return this.saleRepository.findAll();
  }

  async findOne(id: number) {
    return this.saleRepository.findOne(id);
  }

  async create(data: CreateSaleDto) {
    const date = new Date();
    const articles = await Promise.all(
      data.articles.map(async (article) => {
        const articleData = await this.articleService.getArticleById(
          article.articleId,
        );

        if (!articleData) {
          throw new Error('Article not found');
        }

        if (articleData.stock < article.quantity) {
          throw new Error('Not enough stock');
        }

        return {
          articleId: article.articleId,
          quantity: article.quantity,
          price: articleData.price,
        };
      }),
    );

    const total = articles.reduce((acc, article) => {
      return acc + article.price * article.quantity;
    }, 0);
    const sale = await this.saleRepository.create({
      ...data.sale,
      date,
      total: total,
    });

    await this.saleArticleService.createManySaleArticles(
      articles.map((article) => ({
        sale_id: sale.id,
        article_id: article.articleId,
        quantity: article.quantity,
      })),
    );

    return {
      ...sale,
      articles,
    };
  }

  async findSalesInDateRange(startDate: Date, endDate: Date) {
    return this.saleRepository.findSalesInDateRange(startDate, endDate);
  }
}
