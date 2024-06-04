import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { sale } from '@prisma/client';
import { SaleRepository } from 'src/data/types/sale';

@Injectable()
export class PrismaSaleRepository implements SaleRepository {
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

  async update(id: number, data: Partial<sale>) {
    return this.prismaService.sale.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.sale.delete({
      where: {
        id,
      },
    });
  }

  async getSaleByCode(code: string) {
    return this.prismaService.sale.findFirst({
      where: {
        code,
      },
    });
  }
}
