import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { Sale } from './sale';
import { SaleArticleModule } from 'src/sale-article/sale-article.module';
import { ArticleModule } from 'src/article/article.module';

@Module({
  imports: [SaleArticleModule, ArticleModule],
  controllers: [SaleController],
  providers: [SaleService, PrismaService, Sale],
})
export class SaleModule {}
