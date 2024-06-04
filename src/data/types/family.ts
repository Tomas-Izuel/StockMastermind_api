import { family } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface FamilyRepository extends CommonRepository<family> {}
