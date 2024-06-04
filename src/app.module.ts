import { Module } from '@nestjs/common';
import { OrderStatusModule } from './modules/order-status.module';
import { ArticleModule } from './modules/article.module';
import { FamilyModule } from './modules/family.module';
import { SaleStatusModule } from './modules/sale-status.module';
import { DiscountShipCostModule } from './modules/discount-ship-cost.module';
import { SaleModule } from './modules/sale.module';
import { ClientModule } from './modules/client.module';
import { DemandParamsModule } from './modules/demand-params.module';
import { OrderModule } from './modules/order.module';
import { ProviderModule } from './modules/provider.module';
import { SaleArticleModule } from './sale-article/sale-article.module';

@Module({
  imports: [
    FamilyModule,
    ArticleModule,
    SaleStatusModule,
    OrderStatusModule,
    DiscountShipCostModule,
    SaleModule,
    ClientModule,
    DemandParamsModule,
    OrderModule,
    ProviderModule,
    SaleArticleModule
  ],
})
export class AppModule { }
