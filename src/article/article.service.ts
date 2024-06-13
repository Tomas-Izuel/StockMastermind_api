import { Injectable } from '@nestjs/common';
import { article } from '@prisma/client';
import { Article } from './article';
import { ArticleQueryParams } from './data/article.type';

@Injectable()
export class ArticleService {
  constructor(private articleRepository: Article) {}

  async getArticles(filter: ArticleQueryParams) {
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

  async addStock(id: number, quantity: number) {
    const article = await this.articleRepository.findOne(id);
    if (!article) {
      throw new Error('Article not found');
    }

    return this.articleRepository.update(id, {
      stock: article.stock + quantity,
    });
  }

  async deleteArticle(id: number) {
    return this.articleRepository.delete(id);
  }
}
