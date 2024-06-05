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
import { CreateClientDto, EditClientDto } from 'src/data/dtos/client.dto';
import { ClientService } from 'src/services/client.service';

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) { }

    @Get('/')
    async getClients() {
        return this.clientService.getClients();
    }

    @Get('/:id')
    async getClientById(@Param() id: number) {
        return this.clientService.getClientById(id);
    }

    @Post('/create')
    @UsePipes(new ValidationPipe())
    async createClient(@Body() data: CreateClientDto) {
        return this.clientService.createClient(data);
    }

    @Put('/edit/:id')
    @UsePipes(new ValidationPipe())
    async editClient(@Body() data: EditClientDto, @Param('id') id: number) {
        return this.clientService.editClient(id, data);
    }

    @Delete('/delete/:id')
    async deleteClient(@Param('id') id: number) {
        return this.clientService.deleteClient(id);
    }
}