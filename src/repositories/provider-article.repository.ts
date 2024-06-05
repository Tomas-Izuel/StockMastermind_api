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

  async create(data: Omit<provider_article, 'id'>) {
    return this.prismaService.provider_article.create({
      data: {
        ...data,
      },
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
}