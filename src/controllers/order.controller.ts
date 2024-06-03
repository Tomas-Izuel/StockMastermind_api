import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';

import { OrderService } from '../services/order.service';
import { CreateOrderDto } from 'src/dtos/order.dto';
import { EditOrderDto } from 'src/dtos/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) { }

  @Get('/')
  async getOrders() {
    return this.orderService.getOrders();
  }

  @Get('/:id')
  async getOrderById(@Param('id') id: number) {
    return this.orderService.getOrderById(id);
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createOrder(@Body() data: CreateOrderDto) {
    return this.orderService.createOrder(data);
  }

  @Put('/edit/:id')
  @UsePipes(new ValidationPipe())
  async editOrder(
    @Body() data: EditOrderDto,
    @Param('id') id: number,
  ) {
    return this.orderService.updateOrder(id, data);
  }

  @Delete('/delete/:id')
  async deleteOrder(@Param('id') id: number) {
    return this.orderService.deleteOrder(id);
  }
}