import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { Order } from './order';
import { OrderController } from './order.controller';
import { OrderArticleModule } from 'src/order-article/order-article.module';
import { OrderStatusModule } from 'src/order-status/order-status.module';
import { ProviderModule } from 'src/provider/provider.module';
import { ProviderArticleModule } from 'src/provider-article/provider-article.module';
import { ArticleModule } from 'src/article/article.module';

@Module({
  imports: [
    OrderArticleModule,
    OrderStatusModule,
    ProviderModule,
    ProviderArticleModule,
    ArticleModule,
  ],
  providers: [OrderService, PrismaService, Order],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
