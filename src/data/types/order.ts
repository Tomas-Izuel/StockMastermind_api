import { order } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface OrderRepository extends CommonRepository<order> {}
