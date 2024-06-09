import { sale } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface SaleRepository extends CommonRepository<sale> {}
