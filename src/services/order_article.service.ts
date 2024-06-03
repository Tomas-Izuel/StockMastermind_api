import { Injectable } from "@nestjs/common";
import { order_article } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderArticleService {
    constructor(private prismaService: PrismaService) { }

    async getOrderArticles() {
        return this.prismaService.order_article.findMany();
    }

    async getOrderArticleById(id: number) {
        return this.prismaService.order_article.findUnique({
            where: {
                id,
            },
        });
    }

    async createOrderArticle(data: Omit<order_article, 'id'>) {
        return this.prismaService.order_article.create({
            data,
        });
    }

    async editOrderArticle(id: number, data: Partial<order_article>) {
        return this.prismaService.order_article.update({
            where: {
                id,
            },
            data,
        });
    }

    async deleteOrderArticle(id: number) {
        return this.prismaService.order_article.delete({
            where: {
                id,
            },
        });
    }
}