import { Module } from '@nestjs/common';
import { OrderController } from 'src/controllers/order.controller';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { OrderArticleService } from 'src/services/order-article.service';
import { OrderService } from 'src/services/order.service';
import { OrderStatusService } from 'src/services/order_status.service';
import { ProviderService } from 'src/services/provider.service';
import { OrderStatusModule } from './order_status.module'; // Importar el módulo

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    PrismaService,
    OrderArticleService,
    OrderStatusService,
    ProviderService,
  ],
  imports: [OrderStatusModule], // Asegurar que el módulo sea importado
})
export class OrderModule {}
