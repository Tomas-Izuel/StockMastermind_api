import { Injectable } from "@nestjs/common";
import { order } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) { }

  async getOrders() {
    return this.prismaService.order.findMany();
  }

  async getOrderById(id: number) {
    return this.prismaService.order.findUnique({
      where: {
        id,
      },
    });
  }

  async createOrder(data: Omit<order, 'id'>) {
    return this.prismaService.order.create({
      data: {
        ...data,
      },
    });
  }

  async updateOrder(id: number, data: Partial<order>) {
    return this.prismaService.order.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteOrder(id: number) {
    return this.prismaService.order.delete({
      where: {
        id,
      },
    });
  }
}