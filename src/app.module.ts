import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FamilyModule } from './family/family.module';
import { ArticleModule } from './article/article.module';
import { SaleStatusController } from './sale-status/sale-status.controller';
import { SaleStatusModule } from './sale-status/sale-status.module';
import { OrderStatusModule } from './order-status/order-status.module';

@Module({
  imports: [FamilyModule, ArticleModule, SaleStatusModule, OrderStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
