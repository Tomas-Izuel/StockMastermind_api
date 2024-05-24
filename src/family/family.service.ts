import { Injectable } from '@nestjs/common';
import { Family } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FamilyService {
  constructor(private prismaService: PrismaService) {}

  async getFamilies(): Promise<Family[]> {
    return this.prismaService.family.findMany();
  }

  async getFamilyByName(name: string): Promise<Family> {
    return this.prismaService.family.findFirst({
      where: {
        name,
      },
    });
  }

  async createFamily(name: string): Promise<Family> {
    return this.prismaService.family.create({
      data: {
        name,
      },
    });
  }
}
