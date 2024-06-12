import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import {
  CreateOrderStatusDto,
  UpdateOrderStatusDto,
} from './data/order-status.dto';

@Controller('order-status')
export class OrderStatusController {
  constructor(private orderStatusService: OrderStatusService) {}

  @Get('/')
  async getOrderStatus() {
    return this.orderStatusService.getAllOrderStatus();
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createOrderStatus(@Body() data: CreateOrderStatusDto) {
    return this.orderStatusService.createOrderStatus(data);
  }

  @Put('/edit/:id')
  @UsePipes(new ValidationPipe())
  async editOrderStatus(
    @Body() data: UpdateOrderStatusDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.orderStatusService.updateOrderStatus(id, data);
  }

  @Delete('/delete/:id')
  async deleteOrderStatus(@Param('id', ParseIntPipe) id: number) {
    return this.orderStatusService.deleteOrderStatus(id);
  }
}
