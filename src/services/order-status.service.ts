import { Injectable } from '@nestjs/common';
import { order_status } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { PrismaOrderStatusRepository } from 'src/repositories/order-status.repository';

@Injectable()
export class OrderStatusService {
  orderStatusRepository: PrismaOrderStatusRepository;
  constructor(private prismaService: PrismaService) {
    this.orderStatusRepository = new PrismaOrderStatusRepository(prismaService);
  }

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
