import { Injectable } from '@nestjs/common';
import { family } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { FamilyRepository } from './data/family.types';

@Injectable()
export class Family implements FamilyRepository {
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

  async getFamilyByName(name: string) {
    return this.prismaService.family.findFirst({
      where: {
        name,
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
