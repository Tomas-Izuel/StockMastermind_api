import { Injectable } from '@nestjs/common';
import { sale_article } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class SaleArticle {
  constructor(private prismaService: PrismaService) {}

  async createManySaleArticles(data: Omit<sale_article, 'id'>[]) {
    return this.prismaService.sale_article.createMany({
      data: data.map((d) => ({ ...d })),
    });
  }
}
