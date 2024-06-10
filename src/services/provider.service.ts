import { Injectable } from '@nestjs/common';
import { provider } from '@prisma/client';
import { CreateProviderData } from 'src/data/types/provider';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaProviderRepository } from 'src/repositories/provider.repository';
import { ProviderArticleService } from './provider-article.service';

@Injectable()
export class ProviderService {
  providerRepository: PrismaProviderRepository;
  constructor(
    private prismaService: PrismaService,
    private providerArticle: ProviderArticleService,
  ) {
    this.providerRepository = new PrismaProviderRepository(prismaService);
  }

  async getProviders() {
    return this.providerRepository.findAll();
  }

  async getProviderById(id: number) {
    return this.providerRepository.findOne(id);
  }

  async getDefaulProvider() {
    return this.providerRepository.getDefaultProvider();
  }

  async createProvider(data: CreateProviderData) {
    const provider = await this.providerRepository.create({
      ...data.provider,
      is_default: data.provider.is_default || false,
    });

    const articles = data.articles.map((article) => ({
      ...article,
      provider_id: provider.id,
    }));

    const providerArticles =
      await this.providerArticle.createManyArticlesProvider(articles);

    return { provider, providerArticles };
  }

  async updateProvider(id: number, data: Partial<provider>) {
    return this.providerRepository.update(id, data);
  }

  async changeDefaultProvider(id: number) {
    return this.providerRepository.update(id, { is_default: true });
  }

  async changeArticlePrice(articleId: number, price: number) {
    return this.providerArticle.changeArticlePrice(articleId, price);
  }

  async getArticlesPriceByProviderId(providerId: number, articleId: number[]) {
    return this.providerArticle.getArticlesPriceByProviderId(
      providerId,
      articleId,
    );
  }
}
