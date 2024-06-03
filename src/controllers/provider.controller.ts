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

import { ProviderService } from 'src/services/provider.service';

@Controller('provider')
export class ProviderController {
    constructor(private providerService: ProviderService) { }

    @Get()
    async getProviders() {
        return await this.providerService.getProviders();
    }

    @Get(':id')
    async getProvider(@Param('id') id: number) {
        return await this.providerService.getProvider(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createProvider(@Body() body: any) {
        return await this.providerService.createProvider(body);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateProvider(@Param('id') id: number, @Body() body: any) {
        return await this.providerService.updateProvider(id, body);
    }

    @Delete(':id')
    async deleteProvider(@Param('id') id: number) {
        return await this.providerService.deleteProvider(id);
    }
}