import { Injectable } from '@nestjs/common';
import { provider } from '@prisma/client';
import { ProviderRepository } from 'src/data/types/provider';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class PrismaArticleRepository implements ProviderRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.provider.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.provider.findFirst({
      where: {
        id,
      },
    });
  }

  async create(data: Omit<provider, 'id'>) {
    return this.prismaService.provider.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<provider>) {
    return this.prismaService.provider.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.provider.delete({
      where: {
        id,
      },
    });
  }
}
