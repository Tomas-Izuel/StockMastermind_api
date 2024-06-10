import { Injectable } from '@nestjs/common';
import { provider_article } from '@prisma/client';
import { ProviderArticleRepository } from 'src/data/types/provider-article';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class PrismaProviderArticleRepository
  implements ProviderArticleRepository
{
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.provider_article.findMany();
  }

  async findByArticleId(article_id: number) {
    return this.prismaService.provider_article.findFirst({
      where: {
        article_id,
      },
    });
  }

  async create(data: Omit<provider_article, 'id'>) {
    return this.prismaService.provider_article.create({
      data: {
        ...data,
      },
    });
  }

  async createMany(data: Omit<provider_article, 'id'>[]) {
    return this.prismaService.provider_article.createMany({
      data: data.map((article) => ({
        ...article,
      })),
    });
  }

  async update(id: number, data: Partial<provider_article>) {
    return this.prismaService.provider_article.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.provider_article.delete({
      where: {
        id,
      },
    });
  }

  async findByProviderIdAndArticleId(
    provider_id: number,
    article_id: number[],
  ) {
    return this.prismaService.provider_article.findMany({
      where: {
        provider_id,
        article_id: {
          in: article_id,
        },
      },
    });
  }
}
