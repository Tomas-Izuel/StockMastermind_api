import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { order_article } from '@prisma/client';
import { OrderArticleRepository } from 'src/data/types/order-article';

@Injectable()
export class PrismaOrderArticleRepository implements OrderArticleRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.order_article.findMany();
  }

  async create(data: Omit<order_article, 'id'>) {
    return this.prismaService.order_article.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<order_article>) {
    return this.prismaService.order_article.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.order_article.delete({
      where: {
        id,
      },
    });
  }

  async findOne(id: number) {
    return this.prismaService.order_article.findFirst({
      where: {
        id,
      },
    });
  }
}
