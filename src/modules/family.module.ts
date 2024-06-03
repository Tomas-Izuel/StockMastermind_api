import { Module } from '@nestjs/common';
import { FamilyController } from 'src/controllers/family.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { FamilyService } from 'src/services/family.service';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService, PrismaService],
})
export class FamilyModule { }
