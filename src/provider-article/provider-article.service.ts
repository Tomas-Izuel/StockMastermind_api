import { Injectable } from '@nestjs/common';
import { ProviderArticle } from './provider-article';
import { provider_article } from '@prisma/client';

@Injectable()
export class ProviderArticleService {
  constructor(private providerArticleRepository: ProviderArticle) {}

  async createManyArticlesProvider(data: Omit<provider_article, 'id'>[]) {
    const providerArticles = await this.providerArticleRepository.createMany(
      data,
    );

    return providerArticles;
  }

  async getAllArticlesByProvider(providerId: number) {
    const providerArticles =
      await this.providerArticleRepository.getAllArticlesByProvider(providerId);

    return providerArticles;
  }

  async updateArticlePrice(
    articleId: number,
    providerId: number,
    price: number,
  ) {
    const providerArticle =
      await this.providerArticleRepository.getArticleByProviderAndArticleId(
        providerId,
        articleId,
      );

    if (!providerArticle) {
      return null;
    }

    return this.providerArticleRepository.updateArticlePrice(
      providerArticle.id,
      price,
    );
  }

  async injectPriceToArticles(articles, providerId) {
    const articlesIds = articles.map((article) => article.id);
    const articlesPrices =
      await this.providerArticleRepository.getArticlesPriceByProviderId(
        providerId,
        articlesIds,
      );

    return articles.map((article) => {
      const price = articlesPrices.find(
        (articlePrice) => articlePrice.article_id === article.id,
      );

      return {
        ...article,
        price: price ? price.price : null,
      };
    });
  }
}
