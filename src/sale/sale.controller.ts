import { Body, Controller, Post } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './data/sale.dto';

@Controller('sale')
export class SaleController {
  constructor(private saleService: SaleService) {}

  @Post('/create-sale')
  async createSale(@Body() data: CreateSaleDto) {
    return await this.saleService.create(data);
  }
}
