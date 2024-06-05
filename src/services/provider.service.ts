import { Injectable } from '@nestjs/common';
import { provider } from '@prisma/client';
import { CreateProviderData } from 'src/data/types/provider';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaProviderArticleRepository } from 'src/repositories/provider-article.repository';
import { PrismaProviderRepository } from 'src/repositories/provider.repository';

@Injectable()
export class ProviderService {
  providerRepository: PrismaProviderRepository;
  providerArticleRepository: PrismaProviderArticleRepository;
  constructor(private prismaService: PrismaService) {
    this.providerRepository = new PrismaProviderRepository(prismaService);
    this.providerArticleRepository = new PrismaProviderArticleRepository(
      prismaService,
    );
  }

  async getProviders() {
    return this.providerRepository.findAll();
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

    const providerArticles = await Promise.all(
      articles.map((article) => this.providerArticleRepository.create(article)),
    );

    return { provider, providerArticles };
  }

  async updateProvider(id: number, data: Partial<provider>) {
    return this.providerRepository.update(id, data);
  }

  async changeDefaultProvider(id: number) {
    return this.providerRepository.update(id, { is_default: true });
  }

  async changeArticlePrice(articleId: number, price: number) {
    const providerArticle =
      await this.providerArticleRepository.findByArticleId(articleId);

    if (!providerArticle) {
      throw new Error('Article not found');
    }
    return this.providerArticleRepository.update(providerArticle.id, { price });
  }
}
