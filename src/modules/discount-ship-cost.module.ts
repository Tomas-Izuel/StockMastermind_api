import { Module } from '@nestjs/common';
import { DiscountShipCostController } from 'src/controllers/discount-ship-cost.controller';
import { DiscountShipCostService } from 'src/services/discount-ship-cost.service';

@Module({
  controllers: [DiscountShipCostController],
  providers: [DiscountShipCostService],
})
export class DiscountShipCostModule { }
