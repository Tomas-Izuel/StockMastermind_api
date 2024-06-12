import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './data/order.dto';
import { ZodValidationPipe } from 'src/lib/validators/common.validator';
import { CreateOrderSchema } from './data/order.schema';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/create-order')
  @UsePipes(new ZodValidationPipe(CreateOrderSchema))
  async createOrderController(@Body() data: CreateOrderDto) {
    return this.orderService.createOrder(data);
  }

  @Put('/change-status')
  async changeOrderStatusController(
    @Param('id', ParseIntPipe) orderId: number,
    @Param('status', ParseIntPipe) statusId: number,
  ) {
    return this.orderService.changeOrderStatus(orderId, statusId);
  }
}
