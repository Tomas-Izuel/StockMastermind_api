import { Module } from '@nestjs/common';
import { OrderStatusController } from '../controllers/order_status.controller';
import { OrderStatusService } from '../services/order_status.service';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Module({
    controllers: [OrderStatusController],
    providers: [OrderStatusService, PrismaService],
})
export class OrderStatusModule { }