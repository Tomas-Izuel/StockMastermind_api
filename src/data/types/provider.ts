import { provider } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface ProviderRepository extends CommonRepository<provider> {}
