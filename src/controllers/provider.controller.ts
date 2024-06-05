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
import { CreateProvider } from 'src/data/dtos/provider.dto';
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
}
