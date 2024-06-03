import { Injectable } from "@nestjs/common";
import { sale } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SaleService {
    constructor(private prismaService: PrismaService) { }

    async getSales() {
        return this.prismaService.sale.findMany();
    }

    async getSaleById(id: number) {
        return this.prismaService.sale.findUnique({
            where: {
                id,
            },
        });
    }

    async createSale(data: Omit<sale, 'id'>) {
        return this.prismaService.sale.create({
            data,
        });
    }

    async editSale(id: number, data: Partial<sale>) {
        return this.prismaService.sale.update({
            where: {
                id,
            },
            data,
        });
    }

    async deleteSale(id: number) {
        return this.prismaService.sale.delete({
            where: {
                id,
            },
        });
    }
}