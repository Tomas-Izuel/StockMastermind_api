import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { order_status } from '@prisma/client';
import { OrderStatusRepository } from 'src/data/types/order-status';

@Injectable()
export class PrismaOrderStatusRepository implements OrderStatusRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.order_status.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.order_status.findFirst({
      where: {
        id,
      },
    });
  }

  async getOrderStatusByName(name: string) {
    return this.prismaService.order_status.findFirst({
      where: {
        name,
      },
    });
  }

  async create(data: Omit<order_status, 'id'>) {
    return this.prismaService.order_status.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<order_status>) {
    return this.prismaService.order_status.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.order_status.delete({
      where: {
        id,
      },
    });
  }
}
