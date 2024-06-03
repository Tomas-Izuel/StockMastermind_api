import { Body, Controller, Get, Param, Post, Put, ValidationPipe, UsePipes, Query, Delete } from "@nestjs/common";

import { SaleService } from "../services/sale.service";
import { CreateSaleDto, EditSaleDto } from "src/dtos/sale.dto";

@Controller('sale')
export class SaleController {
    constructor(private saleService: SaleService) { }

    @Get('/')
    @UsePipes(
        new ValidationPipe({
            whitelist: true,
        }),
    )
    async getSalesController() {
        return this.saleService.getSales();
    }

    @Get(':id')
    async getSaleController(@Param() id: number) {
        return this.saleService.getSaleById(id);
    }

    @Post('/create')
    @UsePipes(new ValidationPipe())
    async createSaleController(@Body() data: CreateSaleDto) {
        return this.saleService.createSale(data);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updateSaleController(
        @Param() id: number,
        @Body() data: EditSaleDto
    ) {
        return this.saleService.editSale(id, data);
    }

    @Delete(':id')
    async deleteSaleController(@Param() id: number) {
        return this.saleService.deleteSale(id);
    }
}