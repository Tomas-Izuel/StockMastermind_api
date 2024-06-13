import { Injectable } from '@nestjs/common';
import { SaleRepository } from './data/sale.types';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { sale } from '@prisma/client';

@Injectable()
export class Sale implements SaleRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.sale.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.sale.findFirst({
      where: {
        id,
      },
    });
  }

  async create(data: Omit<sale, 'id'>) {
    return this.prismaService.sale.create({
      data: {
        ...data,
      },
    });
  }

  async findSalesInDateRange(startDate: Date, endDate: Date) {
    return this.prismaService.sale.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }
}
