import { Injectable } from '@nestjs/common';
import { provider_article } from '@prisma/client';
import { ArticleWithPrice } from 'src/article/data/article.dto';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class ProviderArticle {
  constructor(private prismaService: PrismaService) {}

  async getAllArticlesByProvider(providerId: number) {
    return this.prismaService.provider_article.findMany({
      where: {
        provider_id: providerId,
      },
    });
  }

  async getArticleByProviderAndArticleId(
    providerId: number,
    articleId: number,
  ) {
    const articles = await this.prismaService.provider_article.findMany({
      where: {
        article_id: articleId,
      },
    });

    return articles.find((article) => article.provider_id === providerId);
  }

  async createMany(data: Omit<provider_article, 'id'>[]) {
    return this.prismaService.provider_article.createMany({
      data: data.map((article) => ({
        ...article,
      })),
    });
  }

  async updateArticlePrice(id: number, price: number) {
    return this.prismaService.provider_article.update({
      where: { id },
      data: { price },
    });
  }

  async getArticlesPriceByProviderId(
    providerId: number,
    articlesIds: number[],
  ): Promise<ArticleWithPrice[]> {
    return this.prismaService.provider_article.findMany({
      where: {
        provider_id: providerId,
        article_id: {
          in: articlesIds,
        },
      },
    });
  }
}
