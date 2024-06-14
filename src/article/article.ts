import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { article } from '@prisma/client';
import { ArticleFilter, ArticleQueryParams, ArticleRepository } from './data/article.type';

@Injectable()
export class Article implements ArticleRepository {
  constructor(private prismaService: PrismaService) { }

  private getFilters(filter: ArticleFilter) {
    const where: any = {};
    if (filter.family_id) {
      where.family_id = filter.family_id;
    }
    if (filter.name) {
      where.name = filter.name;
    }
    if (filter.search) {
      const search = filter.search;
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { timezone: { contains: search, mode: 'insensitive' } },
      ];
    }
    return where;
  }

  async findAll(filter?: ArticleQueryParams) {
    const where = this.getFilters(filter);
    return this.prismaService.article.findMany({
      where: where,
      orderBy: {
        [filter?.sort ?? 'id']: filter?.sort_dir ?? 'asc',
      },
      skip: filter?.page ? (filter.page - 1) * (filter?.limit || 10) : 0,
      take: filter?.limit || 10,
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
