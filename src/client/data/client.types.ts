import { client } from '@prisma/client';
import { CommonRepository } from 'types/common';

export interface ClientRepository extends CommonRepository<client> {}
