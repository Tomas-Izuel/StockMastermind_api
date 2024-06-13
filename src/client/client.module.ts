import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { Client } from './client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Module({
  controllers: [ClientController],
  providers: [ClientService, PrismaService, Client],
  exports: [ClientService],
})
export class ClientModule {}
