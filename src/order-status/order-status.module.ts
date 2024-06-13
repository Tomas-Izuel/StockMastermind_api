import { Module } from '@nestjs/common';
import { OrderStatusController } from './order-status.controller';
import { OrderStatusService } from './order-status.service';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { OrderStatus } from './order-status';

@Module({
  controllers: [OrderStatusController],
  providers: [OrderStatusService, PrismaService, OrderStatus],
  exports: [OrderStatusService], // Asegúrate de exportar OrderStatusService
})
export class OrderStatusModule {}
