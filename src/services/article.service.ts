import { Injectable, Query } from '@nestjs/common';
import { article } from '@prisma/client';
import { FilterArticle } from 'src/data/types/article';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaArticleRepository } from 'src/repositories/article.repository';

@Injectable()
export class ArticleService {
  articleRepository: PrismaArticleRepository;
  constructor(private prismaService: PrismaService) {
    this.articleRepository = new PrismaArticleRepository(prismaService);
  }

  
    async getArticles(filter?: FilterArticle) {
      // Verifica si filter está definido y si filter.page no está definido o es menor que 1
      if (filter && (!filter.page || filter.page < 1)) {
        // Si filter está definido y filter.page no está definido o es menor que 1,
        // entonces asigna por defecto page = 1 al filtro
        filter = { ...filter, page: 1 };
      }
    
      // Calcula el valor de skip basado en el filtro de paginación
      const skip = filter && filter.page ? (filter.page - 1) * (filter.limit || 10) : undefined;
    
      // Llama al método findMany del repositorio PrismaArticle con el filtro actualizado
      return this.prismaService.article.findMany({
        where: {},
        orderBy: {
          id: "asc"
        },
        take: filter ? filter.limit : undefined,
        skip: skip // Proporciona el valor calculado de skip
      });
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
