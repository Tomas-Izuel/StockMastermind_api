import { Injectable } from '@nestjs/common';
import { order } from '@prisma/client';
import { OrderRepository } from 'src/data/types/order';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.order.findMany();
  }

  async create(data: Omit<order, 'id'>) {
    return this.prismaService.order.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<order>) {
    return this.prismaService.order.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.order.delete({
      where: {
        id,
      },
    });
  }

  async findOne(id: number) {
    return this.prismaService.order.findFirst({
      where: {
        id,
      },
    });
  }

  async getOrderByCode(code: string) {
    return this.prismaService.order.findFirst({
      where: {
        code,
      },
    });
  }
}
