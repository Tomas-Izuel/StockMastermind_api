import { Injectable } from '@nestjs/common';
import { order_status } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderStatusService {
  constructor(private prismaService: PrismaService) { }

  async getOrderStatuses() {
    return this.prismaService.order_status.findMany();
  }

  async createSaleStatus(data: Omit<order_status, 'id'>) {
    return this.prismaService.order_status.create({
      data: {
        ...data,
      },
    });
  }

  async editSaleStatus(id: number, data: Partial<order_status>) {
    return this.prismaService.order_status.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteSaleStatus(id: number) {
    return this.prismaService.order_status.delete({
      where: {
        id,
      },
    });
  }
}
