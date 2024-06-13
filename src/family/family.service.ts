import { Injectable } from '@nestjs/common';
import { family } from '@prisma/client';
import { Family } from './family';

@Injectable()
export class FamilyService {
  constructor(private familyRepository: Family) {}

  async getFamilies(): Promise<family[]> {
    return this.familyRepository.findAll();
  }

  async getFamilyByName(name: string) {
    return this.familyRepository.getFamilyByName(name);
  }

  async createFamily(name: string): Promise<family> {
    return this.familyRepository.create({ name });
  }
}
