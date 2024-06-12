import { Module } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';
import { Family } from './family';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService, PrismaService, Family],
  exports: [FamilyService],
})
export class FamilyModule {}
