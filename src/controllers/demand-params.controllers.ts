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

import { DemandParamsService } from 'src/services/demand-params.service';

@Controller('demand-params')
export class DemandParamsController {
    constructor(private demandParamsService: DemandParamsService) { }

    @Get()
    async getDemandParams() {
        return await this.demandParamsService.getDemandParams();
    }

    @Get(':id')
    async getDemandParam(@Param('id') id: number) {
        return await this.demandParamsService.getDemandParam(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createDemandParam(@Body() body: any) {
        return await this.demandParamsService.createDemandParam(body);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateDemandParam(@Param('id') id: number, @Body() body: any) {
        return await this.demandParamsService.updateDemandParam(id, body);
    }

    @Delete(':id')
    async deleteDemandParam(@Param('id') id: number) {
        return await this.demandParamsService.deleteDemandParam(id);
    }
}