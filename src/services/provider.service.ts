import { Injectable } from "@nestjs/common";
import { provider } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProviderService {
    constructor(private prismaService: PrismaService) { }

    async getProviders() {
        return this.prismaService.provider.findMany();
    }

    async getProvider(id: number) {
        return this.prismaService.provider.findUnique({
            where: {
                id
            }
        });
    }

    async createProvider(data: Omit<provider, 'id'>) {
        return this.prismaService.provider.create({
            data: {
                ...data
            }
        });
    }

    async updateProvider(id: number, data: Partial<provider>) {
        return this.prismaService.provider.update({
            where: {
                id
            },
            data: {
                ...data
            }
        });
    }

    async deleteProvider(id: number) {
        return this.prismaService.provider.delete({
            where: {
                id
            }
        });
    }
}