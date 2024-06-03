import { Injectable } from '@nestjs/common';
import { sale_status } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleStatusService {
  constructor(private prismaService: PrismaService) { }

  async getSaleStatus() {
    return this.prismaService.sale_status.findMany();
  }

  async createSaleStatus(data: Omit<sale_status, 'id'>) {
    return this.prismaService.sale_status.create({
      data: {
        ...data,
      },
    });
  }

  async editSaleStatus(id: number, data: Partial<sale_status>) {
    return this.prismaService.sale_status.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteSaleStatus(id: number) {
    return this.prismaService.sale_status.delete({
      where: {
        id,
      },
    });
  }
}
