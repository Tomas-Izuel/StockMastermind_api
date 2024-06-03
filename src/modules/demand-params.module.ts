import { Module } from "@nestjs/common";
import { DemandParamsController } from "src/controllers/demand-params.controllers";
import { PrismaService } from "src/prisma/prisma.service";
import { DemandParamsService } from "src/services/demand-params.service";

@Module({
    controllers: [DemandParamsController],
    providers: [DemandParamsService, PrismaService],
})
export class DemandParamsModule { }