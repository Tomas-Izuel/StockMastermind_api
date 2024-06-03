import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
  UsePipes,
  Query,
  Delete,
} from '@nestjs/common';
import { DiscountShipCostService } from 'src/services/discount-ship-cost.service';

@Controller('discount-ship-cost')
export class DiscountShipCostController {
  constructor(private discountShipCostService: DiscountShipCostService) {}
}
