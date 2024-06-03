import { Module } from "@nestjs/common";
import { SaleController } from "src/controllers/sale.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { SaleService } from "src/services/sale.service";

@Module({
    controllers: [SaleController],
    providers: [SaleService, PrismaService],
})
export class SaleModule { }