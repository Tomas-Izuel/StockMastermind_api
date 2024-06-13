import { Injectable } from '@nestjs/common';
import { ProviderArticleService } from 'src/provider-article/provider-article.service';
import { Provider } from './provider';
import { CreateProvider } from './data/provider.types';
import { provider } from '@prisma/client';
import { CreateProviderDto } from './data/provider.dto';
import { ArticleWithPrice } from 'src/article/data/article.dto';

@Injectable()
export class ProviderService {
  constructor(
    private providerRepository: Provider,
    private providerArticle: ProviderArticleService,
  ) {}

  async getProviders() {
    return this.providerRepository.findAll();
  }

  async getProviderById(id: number) {
    return this.providerRepository.findOne(id);
  }

  async getDefaulProvider() {
    return this.providerRepository.getDefaultProvider();
  }

  async createProvider(data: CreateProviderDto) {
    const provider = await this.providerRepository.create(data.provider);

    const articles = data.articles.map((article) => ({
      ...article,
      provider_id: provider.id,
    }));

    const providerArticles =
      await this.providerArticle.createManyArticlesProvider(articles);

    return {
      provider: provider,
      articles: providerArticles,
    };
  }

  async updateProvider(id: number, data: Partial<provider>) {
    return this.providerRepository.update(id, data);
  }

  async changeDefaultProvider(id: number) {
    const defaultProvider = await this.providerRepository.getDefaultProvider();
    if (defaultProvider) {
      await this.providerRepository.update(defaultProvider.id, {
        is_default: false,
      });
    }
    return this.providerRepository.update(id, { is_default: true });
  }

  async changeArticlePrice(
    articleId: number,
    providerId: number,
    price: number,
  ) {
    return this.providerArticle.updateArticlePrice(
      articleId,
      providerId,
      price,
    );
  }

  async getArticlesPriceByProviderId(
    providerId: number,
    articlesIds: number[],
  ): Promise<ArticleWithPrice[]> {
    return this.providerArticle.injectPriceToArticles(articlesIds, providerId);
  }
}
