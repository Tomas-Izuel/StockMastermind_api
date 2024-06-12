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
  ParseIntPipe,
} from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto, UpdateProviderDto } from './data/provider.dto';
import { ZodValidationPipe } from 'src/lib/validators/common.validator';
import {
  CreateProviderSchema,
  UpdateProviderSchema,
} from './data/provider.schema';

@Controller('provider')
export class ProviderController {
  constructor(private providerService: ProviderService) {}

  @Get('/')
  async getProvidersController() {
    return this.providerService.getProviders();
  }

  @Post('/')
  @UsePipes(new ZodValidationPipe(CreateProviderSchema))
  async createProviderController(@Body() data: CreateProviderDto) {
    return this.providerService.createProvider(data);
  }

  @Put('/:id')
  @UsePipes(new ZodValidationPipe(UpdateProviderSchema))
  async updateProviderController(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProviderDto,
  ) {
    return this.providerService.updateProvider(id, data);
  }

  @Put('/:id/change-default')
  async changeDefaultProviderController(@Param('id', ParseIntPipe) id: number) {
    return this.providerService.changeDefaultProvider(id);
  }

  @Put('/:articleId/change-price')
  async changeArticlePriceController(
    @Param('articleId', ParseIntPipe) articleId: number,
    @Param('providerId', ParseIntPipe) providerId: number,
    @Query('price') price: number,
  ) {
    return this.providerService.changeArticlePrice(
      articleId,
      providerId,
      price,
    );
  }
}
