import { Controller, Get } from '@nestjs/common';
import { OrderStatusService } from './order-status.service';

@Controller('order-status')
export class OrderStatusController {
  constructor(private orderStatusService: OrderStatusService) {}

  @Get('/')
  async getOrderStatus() {
    return this.orderStatusService.getOrderStatuses();
  }
}
