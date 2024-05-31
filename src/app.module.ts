import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderStatusModule } from './modules/order-status.module';
import { ArticleModule } from './modules/article.module';
import { FamilyModule } from './modules/family.module';
import { SaleStatusModule } from './modules/sale-status.module';

@Module({
  imports: [FamilyModule, ArticleModule, SaleStatusModule, OrderStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
