import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { article } from '@prisma/client';
import { ArticleRepository, FilterArticle } from 'src/data/types/article';

@Injectable()
export class PrismaArticleRepository implements ArticleRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll(filter?: FilterArticle) {
    const where: any = {};

    if (filter?.family_id) {
      where['family_id'] = filter;
    }

    if (filter?.search) {
      where['name'] = {
        contains: filter.search,
      };
    }

    return this.prismaService.article.findMany({
      where: where,
      orderBy: {
        [filter?.sort ?? 'id']: filter?.sort_dir ?? 'asc',
      },
      skip: filter?.page > 1 ? (filter?.page - 1) * filter?.limit : 0,
      take: filter?.limit,
    });
  }

  async findOne(id: number) {
    return this.prismaService.article.findFirst({
      where: {
        id,
      },
    });
  }

  async getArticleByCode(code: string) {
    return this.prismaService.article.findFirst({
      where: {
        code,
      },
    });
  }

  async getArticleByName(name: string) {
    return this.prismaService.article.findFirst({
      where: {
        name,
      },
    });
  }

  async create(data: Omit<article, 'id'>) {
    return this.prismaService.article.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<article>) {
    return this.prismaService.article.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.article.delete({
      where: {
        id,
      },
    });
  }
}
