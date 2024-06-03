import { Module } from "@nestjs/common";
import e from "express";
import { OrderArticleController } from "src/controllers/order_article.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { OrderArticleService } from "src/services/order_article.service";

@Module({
    controllers: [OrderArticleController],
    providers: [OrderArticleService, PrismaService],
})
export class OrderArticleModule { }