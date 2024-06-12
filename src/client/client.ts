import { Injectable } from '@nestjs/common';
import { ClientRepository } from './data/client.types';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { client } from '@prisma/client';

@Injectable()
export class Client implements ClientRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.client.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.client.findFirst({
      where: {
        id,
      },
    });
  }

  async getClientByName(name: string) {
    return this.prismaService.client.findFirst({
      where: {
        name,
      },
    });
  }

  async create(data: Omit<client, 'id'>) {
    return this.prismaService.client.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: Partial<client>) {
    return this.prismaService.client.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.client.delete({
      where: {
        id,
      },
    });
  }
}
