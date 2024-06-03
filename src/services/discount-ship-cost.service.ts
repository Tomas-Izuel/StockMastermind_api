import { Injectable } from '@nestjs/common';
import { provider_discount } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiscountShipCostService {
  constructor(private prismaService: PrismaService) { }

  async getDiscountShipCost() {
    return this.prismaService.provider_discount.findMany();
  }

  async getDiscountShipCostByProviderId(providerId: number) {
    return this.prismaService.provider_discount.findMany({
      where: {
        provider_id: providerId,
      },
    });
  }

  async createDiscountShipCost(data: Omit<provider_discount, 'id'>) {
    return this.prismaService.provider_discount.create({
      data: {
        ...data,
      },
    });
  }

  async getDiscountAccordingToPrice(price: number, providerId: number) {
    return this.prismaService.provider_discount.findFirst({
      where: {
        AND: [
          {
            start_price: {
              lte: price,
            },
          },
          {
            end_price: {
              gte: price,
            },
          },
          {
            provider_id: providerId,
          },
        ],
      },
    });
  }

  async updateDiscountShipCost(id: number, data: Partial<provider_discount>) {
    return this.prismaService.provider_discount.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteDiscountShipCost(id: number) {
    return this.prismaService.provider_discount.delete({
      where: {
        id,
      },
    });
  }
}
