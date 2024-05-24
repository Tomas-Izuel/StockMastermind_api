import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FamilyService } from './family.service';
import { CreateFamilyDto } from './dto/create-family.dto';

@Controller('family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Get('/')
  async getFamiliesController() {
    return this.familyService.getFamilies();
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
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
