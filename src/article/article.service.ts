import { Injectable } from '@nestjs/common';
import { Article } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { transformQueryParamsIntoSQLWhere } from 'src/utils/common';

@Injectable()
export class ArticleService {
  constructor(private prismaService: PrismaService) {}
  async getArticles(filter?: any) {
    console.log(filter, ' pitp');
    return this.prismaService.article.findMany();
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

  async changeArticleStock(id: number, stock: number) {
    return this.prismaService.article.update({
      where: {
        id,
      },
      data: {
        stock,
      },
    });
  }
}
