import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { FamilyService } from './family.service';
import { CreateFamilyDto } from './data/family.dto';
import { ZodValidationPipe } from 'src/lib/validators/common.validator';
import { CreateFamilySchema } from './data/family.schema';

@Controller('family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Get('/')
  async getFamiliesController() {
    return this.familyService.getFamilies();
  }

  @Post('/create')
  @UsePipes(new ZodValidationPipe(CreateFamilySchema))
  async createFamilyController(@Body() data: CreateFamilyDto) {
    try {
      const existingFamily = await this.familyService.getFamilyByName(
        data.name,
      );
      if (existingFamily) {
        return existingFamily;
      }
      return this.familyService.createFamily(data.name);
    } catch (error) {}
  }
}
