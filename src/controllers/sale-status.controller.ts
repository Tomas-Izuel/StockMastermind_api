import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateSaleStatusDto,
  EditSaleStatusDto,
} from 'src/dtos/sale-status.dto';
import { SaleStatusService } from 'src/services/sale-status.service';

@Controller('sale-status')
export class SaleStatusController {
  constructor(private saleStatusService: SaleStatusService) { }

  @Get('/')
  async getSaleStatusController() {
    return this.saleStatusService.getSaleStatus();
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createSaleStatusController(@Body() data: CreateSaleStatusDto) {
    return this.saleStatusService.createSaleStatus(data);
  }

  @Put('/edit/:id')
  @UsePipes(new ValidationPipe())
  async editSaleStatusController(
    @Body() data: EditSaleStatusDto,
    @Param('id') id: number,
  ) {
    return this.saleStatusService.editSaleStatus(id, data);
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  async deleteSaleStatusController(@Param('id') id: number) {
    return this.saleStatusService.deleteSaleStatus(id);
  }
}
