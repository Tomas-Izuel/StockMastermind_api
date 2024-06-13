import { Injectable } from '@nestjs/common';
import { OrderStatus } from './order-status';
import { order_status } from '@prisma/client';

@Injectable()
export class OrderStatusService {
  constructor(private orderStatusRepository: OrderStatus) {}

  async getAllOrderStatus() {
    return this.orderStatusRepository.findAll();
  }

  async getOrderStatusById(id: number) {
    return this.orderStatusRepository.findOne(id);
  }

  async getOrderStatusByName(name: string) {
    return this.orderStatusRepository.getOrderStatusByName(name);
  }

  async createOrderStatus(data: Omit<order_status, 'id'>) {
    return this.orderStatusRepository.create(data);
  }

  async updateOrderStatus(id: number, data: Partial<order_status>) {
    return this.orderStatusRepository.update(id, data);
  }

  async deleteOrderStatus(id: number) {
    return this.orderStatusRepository.delete(id);
  }
}
