import { Module } from '@nestjs/common';
import { OrderArticleService } from './order-article.service';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { OrderArticle } from './order-article';

@Module({
  providers: [OrderArticleService, PrismaService, OrderArticle],
  exports: [OrderArticleService],
})
export class OrderArticleModule {}
