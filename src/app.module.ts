import { Module } from '@nestjs/common';
import { OrderStatusModule } from './modules/order-status.module';
import { ArticleModule } from './modules/article.module';
import { FamilyModule } from './modules/family.module';
import { SaleStatusModule } from './modules/sale-status.module';
import { DiscountShipCostModule } from './modules/discount-ship-cost.module';
import { SaleModule } from './modules/sale.module';

@Module({
  imports: [
    FamilyModule,
    ArticleModule,
    SaleStatusModule,
    OrderStatusModule,
    DiscountShipCostModule,
    SaleModule
  ],
})
export class AppModule { }
