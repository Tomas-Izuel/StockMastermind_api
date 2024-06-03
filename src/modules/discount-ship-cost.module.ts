import { Module } from '@nestjs/common';
import { DiscountShipCostController } from 'src/controllers/discount-ship-cost.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DiscountShipCostService } from 'src/services/discount-ship-cost.service';

@Module({
  controllers: [DiscountShipCostController],
  providers: [DiscountShipCostService,PrismaService],
})
export class DiscountShipCostModule { }
