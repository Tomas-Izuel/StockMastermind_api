import { Injectable } from '@nestjs/common';
import { provider } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaArticleRepository } from 'src/repositories/article.repository';
import { PrismaProviderRepository } from 'src/repositories/provider.repository';

@Injectable()
export class ProviderService {
  providerRepository: PrismaProviderRepository;
  providerArticleRepository: PrismaArticleRepository;
  constructor(private prismaService: PrismaService) {
    this.providerRepository = new PrismaProviderRepository(prismaService);
    this.providerArticleRepository = new PrismaArticleRepository(prismaService);
  }

  async getProviders() {
    return this.providerRepository.findAll();
  }

  async createProvider(data: Omit<provider, 'id'>) {
    return this.providerRepository.create(data);
  }

  async updateProvider(id: number, data: Partial<provider>) {
    return this.providerRepository.update(id, data);
  }

  async changeDefaultProvider(id: number) {
    return this.providerRepository.update(id, { is_default: true });
  }

  async changeArticlePrice(articleId: number, price: number) {
    return this.providerArticleRepository.update(articleId, { price });
  }
}
