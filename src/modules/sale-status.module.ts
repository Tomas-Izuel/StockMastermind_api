import { Module } from '@nestjs/common';
import { SaleStatusController } from 'src/controllers/sale-status.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SaleStatusService } from 'src/services/sale-status.service';

@Module({
  controllers: [SaleStatusController],
  providers: [SaleStatusService, PrismaService],
})
export class SaleStatusModule {}
