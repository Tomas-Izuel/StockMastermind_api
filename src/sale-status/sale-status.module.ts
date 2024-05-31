import { Module } from '@nestjs/common';
import { SaleStatusService } from './sale-status.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SaleStatusController } from './sale-status.controller';

@Module({
  controllers: [SaleStatusController],
  providers: [SaleStatusService, PrismaService],
})
export class SaleStatusModule {}
