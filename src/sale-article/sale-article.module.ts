import { Module } from '@nestjs/common';
import { SaleArticleService } from './sale-article.service';
import { SaleArticle } from './sale-article';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Module({
  providers: [SaleArticleService, SaleArticle, PrismaService],
  exports: [SaleArticleService],
})
export class SaleArticleModule {}
