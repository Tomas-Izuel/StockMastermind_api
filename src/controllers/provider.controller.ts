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
import { CreateProvider, UpdateProviderDto } from 'src/data/dtos/provider.dto';
import { ProviderService } from 'src/services/provider.service';

@Controller('provider')
export class ProviderController {
  constructor(private providerService: ProviderService) {}

  @Get('/')
  async getProvidersController() {
    return this.providerService.getProviders();
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  async createProviderController(@Body() data: CreateProvider) {
    return this.providerService.createProvider(data);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  async updateProviderController(
    @Param('id') id: number,
    @Body() data: UpdateProviderDto,
  ) {
    return this.providerService.updateProvider(id, data);
  }

  @Put('/:id/change-default')
  async changeDefaultProviderController(@Param('id') id: number) {
    return this.providerService.changeDefaultProvider(id);
  }

  @Put('/:articleId/change-price')
  async changeArticlePriceController(
    @Param('articleId') articleId: number,
    @Query('price') price: number,
  ) {
    return this.providerService.changeArticlePrice(articleId, price);
  }
}
