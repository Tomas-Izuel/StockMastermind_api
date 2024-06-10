import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article.module';
import { ProviderModule } from './modules/provider.module';
import { FamilyModule } from './modules/family.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './modules/client.module';
import { OrderStatusModule } from './modules/order_status.module';
import { OrderModule } from './modules/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ArticleModule,
    ClientModule,
    ProviderModule,
    FamilyModule,
    ProviderModule,
    OrderModule,
    OrderStatusModule,
  ],
  providers: [],
})
export class AppModule {}
