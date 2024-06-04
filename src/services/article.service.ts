import { Injectable } from '@nestjs/common';
import { article } from '@prisma/client';
import { FilterArticle } from 'src/data/types/article';
import { PrismaArticleRepository } from 'src/repositories/article.repository';

@Injectable()
export class ArticleService {
  constructor(private articleRepository: PrismaArticleRepository) {}

  async getArticles(filter: FilterArticle) {
    return this.articleRepository.findAll(filter);
  }

  async getArticleById(id: number) {
    return this.articleRepository.findOne(id);
  }

  async getArticleByCode(code: string) {
    return this.articleRepository.getArticleByCode(code);
  }

  async getArticleByName(name: string) {
    return this.articleRepository.getArticleByName(name);
  }

  async createArticle(data: Omit<article, 'id'>) {
    return this.articleRepository.create(data);
  }

  async updateArticle(id: number, data: Partial<article>) {
    return this.articleRepository.update(id, data);
  }

  async deleteArticle(id: number) {
    return this.articleRepository.delete(id);
  }
}
