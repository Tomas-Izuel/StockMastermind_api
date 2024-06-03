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
  constructor(private discountShipCostService: DiscountShipCostService) { }

  @Get()
  async getDiscountShipCost() {
    return await this.discountShipCostService.getDiscountShipCost();
  }

  @Get(':id')
  async getDiscountShipCostById(@Param('id') id: number) {
    return await this.discountShipCostService.getDiscountShipCostByProviderId(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createDiscountShipCost(@Body() body: any) {
    return await this.discountShipCostService.createDiscountShipCost(body);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateDiscountShipCost(@Param('id') id: number, @Body() body: any) {
    return await this.discountShipCostService.updateDiscountShipCost(id, body);
  }

  @Delete(':id')
  async deleteDiscountShipCost(@Param('id') id: number) {
    return await this.discountShipCostService.deleteDiscountShipCost(id);
  }
}
