import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto, UpdateClientDto } from './data/client.dto';
import { ZodValidationPipe } from 'src/lib/validators/common.validator';
import { CreateClientSchema, UpdateClientSchema } from './data/client.schema';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get('/')
  async getClients() {
    return this.clientService.findAll();
  }

  @Get('/:id')
  async getClientById(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.findOne(id);
  }

  @Post('/create')
  @UsePipes(new ZodValidationPipe(CreateClientSchema))
  async createClient(@Body() data: CreateClientDto) {
    return this.clientService.create(data);
  }

  @Put('/edit/:id')
  async editClient(
    @Body() data: UpdateClientDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.clientService.update(id, data);
  }

  @Delete('/delete/:id')
  async deleteClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.delete(id);
  }
}
