import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    ValidationPipe,
    UsePipes,
    Query,
    Delete,
} from '@nestjs/common';

import { OrderArticleService } from '../services/order_article.service';
import { CreateOrderArticle, EditOrderArticle } from 'src/dtos/order_article.dto';

@Controller('order_article')
export class OrderArticleController {
    constructor(private orderArticleService: OrderArticleService) { }

    @Get('/')
    @UsePipes(
        new ValidationPipe({
            whitelist: true,
        }),
    )
    async getOrderArticlesController() {
        return this.orderArticleService.getOrderArticles();
    }

    @Get(':id')
    async getOrderArticleController(@Param() id: number) {
        return this.orderArticleService.getOrderArticleById(id);
    }

    @Post('/create')
    @UsePipes(new ValidationPipe())
    async createOrderArticleController(@Body() data: CreateOrderArticle) {
        return this.orderArticleService.createOrderArticle(data);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updateOrderArticleController(
        @Param() id: number,
        @Body() data: EditOrderArticle,
    ) {
        return this.orderArticleService.editOrderArticle(id, data);
    }

    @Delete(':id')
    async deleteOrderArticleController(@Param() id: number) {
        return this.orderArticleService.deleteOrderArticle(id);
    }
}