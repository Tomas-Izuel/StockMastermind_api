import { Injectable } from '@nestjs/common';
import { Article } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { transformQueryParamsIntoSQLWhere } from 'src/utils/common';
import { ArticleQueryParams } from 'src/validators/article.validator';

@Injectable()
export class ArticleService {
  constructor(private prismaService: PrismaService) {}
  async getArticles(filter?: ArticleQueryParams) {
    return this.prismaService.article.findMany({
      where: {
        AND: [
          filter.family_id ? { familyId: Number(filter.family_id) } : {},
          filter.search
            ? {
                OR: [
                  { code: { contains: filter.search, mode: 'insensitive' } },
                  { name: { contains: filter.search, mode: 'insensitive' } },
                  { model: { contains: filter.search, mode: 'insensitive' } },
                ],
              }
            : {},
        ],
      },
      orderBy: filter.sort
        ? { [filter.sort]: filter.sort_dir === 'asc' ? 'asc' : 'desc' }
        : undefined,
    });
  }

  async getArticleById(id: number) {
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

  async createArticle(data: Omit<Article, 'id'>) {
    return this.prismaService.article.create({
      data: {
        ...data,
      },
    });
  }

  async updateArticle(id: number, data: Omit<Article, 'id'>) {
    return this.prismaService.article.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteArticle(id: number) {
    return this.prismaService.article.delete({
      where: {
        id,
      },
    });
  }
}
