import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { ClientModule } from './client/client.module';
import { FamilyModule } from './family/family.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { ProviderModule } from './provider/provider.module';
import { OrderArticleModule } from './order-article/order-article.module';
import { ProviderArticleModule } from './provider-article/provider-article.module';
import { OrderModule } from './order/order.module';
import { PrismaModule } from './lib/prisma/prisma.module';
import { ArticleController } from './article/article.controller';
import { ClientController } from './client/client.controller';
import { FamilyController } from './family/family.controller';
import { PrismaService } from './lib/prisma/prisma.service';
import { OrderStatusController } from './order-status/order-status.controller';
import { OrderController } from './order/order.controller';
import { ProviderController } from './provider/provider.controller';
import { ArticleService } from './article/article.service';
import { Article } from './article/article';
import { Sale } from './sale/sale';
import { SaleService } from './sale/sale.service';
import { SaleController } from './sale/sale.controller';
import { SaleModule } from './sale/sale.module';
import { SaleArticle } from './sale-article/sale-article';
import { SaleArticleService } from './sale-article/sale-article.service';
import { SaleArticleModule } from './sale-article/sale-article.module';

@Module({
  imports: [
    ArticleModule,
    ClientModule,
    FamilyModule,
    OrderStatusModule,
    ProviderModule,
    OrderArticleModule,
    ProviderArticleModule,
    OrderModule,
    PrismaModule,
    SaleModule,
    SaleArticleModule,
  ],
  controllers: [
    ArticleController,
    ClientController,
    FamilyController,
    OrderStatusController,
    ProviderController,
    OrderController,
    SaleController,
  ],
  providers: [
    PrismaService,
    ArticleService,
    Article,
    Sale,
    SaleService,
    SaleArticle,
    SaleArticleService,
  ],
})
export class AppModule {}
