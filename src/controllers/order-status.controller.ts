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
import { OrderStatusService } from '../services/order-status.service';
import { CreateOrderStatusDto } from 'src/dtos/order-status.dto';
import { EditSaleStatusDto } from 'src/dtos/sale-status.dto';

@Controller('order-status')
export class OrderStatusController {
  constructor(private orderStatusService: OrderStatusService) {}

  @Get('/')
  async getOrderStatus() {
    return this.orderStatusService.getOrderStatuses();
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createOrderStatus(@Body() data: CreateOrderStatusDto) {
    return this.orderStatusService.createSaleStatus(data);
  }

  @Put('/edit/:id')
  @UsePipes(new ValidationPipe())
  async editOrderStatus(
    @Body() data: EditSaleStatusDto,
    @Param('id') id: number,
  ) {
    return this.orderStatusService.editSaleStatus(id, data);
  }

  @Delete('/delete/:id')
  async deleteOrderStatus(@Param('id') id: number) {
    return this.orderStatusService.deleteSaleStatus(id);
  }
}
