import { client } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface ClientRepository extends CommonRepository<client> {}
