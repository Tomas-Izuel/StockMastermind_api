import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { demand_params } from "@prisma/client";

@Injectable()
export class DemandParamsService {
    constructor(private prismaService: PrismaService) { }

    async getDemandParams() {
        return this.prismaService.demand_params.findMany();
    }

    async getDemandParam(id: number) {
        return this.prismaService.demand_params.findUnique({
            where: {
                id
            }
        });
    }

    async createDemandParam(data: Omit<demand_params, 'id'>) {
        return this.prismaService.demand_params.create({
            data: {
                ...data
            }
        });
    }

    async updateDemandParam(id: number, data: Partial<demand_params>) {
        return this.prismaService.demand_params.update({
            where: {
                id
            },
            data: {
                ...data
            }
        });
    }

    async deleteDemandParam(id: number) {
        return this.prismaService.demand_params.delete({
            where: {
                id
            }
        });
    }
}