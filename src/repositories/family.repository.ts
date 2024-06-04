import { Injectable } from '@nestjs/common';
import { family } from '@prisma/client';
import { FamilyRepository } from 'src/data/types/Family';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class PrismaFamilyRepository implements FamilyRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.family.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.family.findFirst({
      where: {
        id,
      },
    });
  }

  async create(data: Omit<family, 'id'>) {
    return this.prismaService.family.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<family>) {
    return this.prismaService.family.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.family.delete({
      where: {
        id,
      },
    });
  }
}
