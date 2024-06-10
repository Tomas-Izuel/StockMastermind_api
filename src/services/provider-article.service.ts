import { Injectable } from '@nestjs/common';
import { provider_article } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaProviderArticleRepository } from 'src/repositories/provider-article.repository';

@Injectable()
export class ProviderArticleService {
  providerArticleRepository: PrismaProviderArticleRepository;
  constructor(private prismaService: PrismaService) {
    this.providerArticleRepository = new PrismaProviderArticleRepository(
      prismaService,
    );
  }

  async createManyArticlesProvider(data: Omit<provider_article, 'id'>[]) {
    const providerArticles = await this.providerArticleRepository.createMany(
      data,
    );

    return providerArticles;
  }

  async changeArticlePrice(articleId: number, price: number) {
    const providerArticle =
      await this.providerArticleRepository.findByArticleId(articleId);

    if (!providerArticle) {
      throw new Error('Article not found');
    }
    return this.providerArticleRepository.update(providerArticle.id, { price });
  }

  async getArticlesPriceByProviderId(providerId: number, articleId: number[]) {
    const articles =
      await this.providerArticleRepository.findByProviderIdAndArticleId(
        providerId,
        articleId,
      );

    return articles.map((article) => ({
      article_id: article.article_id,
      price: article.price,
    }));
  }
}
