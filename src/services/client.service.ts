import { Injectable } from '@nestjs/common';
import { client } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prismaService: PrismaService) { }

  async getClients() {
    return this.prismaService.client.findMany();
  }

  async getClientById(id: number) {
    return this.prismaService.client.findUnique({
      where: {
        id,
      },
    });
  }

  async createClient(data: Omit<client, 'id'>) {
    return this.prismaService.client.create({
      data,
    });
  }

  async editClient(id: number, data: Partial<client>) {
    return this.prismaService.client.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteClient(id: number) {
    return this.prismaService.client.delete({
      where: {
        id,
      },
    });
  }
}