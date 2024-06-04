import { Module } from '@nestjs/common';
import { SaleArticleController } from 'src/controllers/sale-article.controller';
import { SaleArticleService } from 'src/services/sale-article.service';

@Module({
  controllers: [SaleArticleController],
  providers: [SaleArticleService],
})
export class SaleArticleModule {}
