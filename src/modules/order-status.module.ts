import { Module } from '@nestjs/common';
import { OrderStatusController } from '../controllers/order-status.controller';
import { OrderStatusService } from '../services/order-status.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrderStatusController],
  providers: [OrderStatusService, PrismaService],
})
export class OrderStatusModule {}
