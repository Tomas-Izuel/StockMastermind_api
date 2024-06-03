import { Module } from "@nestjs/common";
import { OrderController } from "src/controllers/order.controller";
import { OrderService } from "src/services/order.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    controllers: [OrderController],
    providers: [OrderService, PrismaService],
})
export class OrderModule { }