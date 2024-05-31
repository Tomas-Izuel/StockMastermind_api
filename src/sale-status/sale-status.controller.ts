import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SaleStatusService } from './sale-status.service';
import { CreateSaleStatusDto } from './dto/create-sale-status.dto';
import { EditSaleStatusDto } from './dto/edit-sale-status.dto';

@Controller('sale-status')
export class SaleStatusController {
  constructor(private saleStatusService: SaleStatusService) {}

  @Get('/')
  async getSaleStatusController() {
    return this.saleStatusService.getSaleStatus();
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createSaleStatusController(@Body() data: CreateSaleStatusDto) {
    return this.saleStatusService.createSaleStatus(data);
  }

  @Post('/edit/:id')
  @UsePipes(new ValidationPipe())
  async editSaleStatusController(
    @Body() data: EditSaleStatusDto,
    @Param('id') id: number,
  ) {
    return this.saleStatusService.editSaleStatus(id, data);
  }

  @Post('/delete/:id')
  @UsePipes(new ValidationPipe())
  async deleteSaleStatusController(@Param('id') id: number) {
    return this.saleStatusService.deleteSaleStatus(id);
  }
}
