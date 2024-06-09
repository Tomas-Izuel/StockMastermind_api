import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { sale_article } from '@prisma/client';
import { SaleArticleRepository } from 'src/data/types/sale-article';

@Injectable()
export class PrismaSaleArticleRepository implements SaleArticleRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.sale_article.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.sale_article.findFirst({
      where: {
        id,
      },
    });
  }

  async create(data: Omit<sale_article, 'id'>) {
    return this.prismaService.sale_article.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<sale_article>) {
    return this.prismaService.sale_article.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.sale_article.delete({
      where: {
        id,
      },
    });
  }
}
