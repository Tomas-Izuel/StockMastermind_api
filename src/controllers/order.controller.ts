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
import { CreateOrderDto } from 'src/data/types/order';
import { OrderService } from 'src/services/order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/create-order')
  @UsePipes(new ValidationPipe())
  async createOrderController(@Body() data: CreateOrderDto) {
    return this.orderService.createOrder(data);
  }
}
