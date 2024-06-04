import { CommonRepository } from './common/repository.common';
import { order_status } from '@prisma/client';

export interface OrderStatusRepository extends CommonRepository<order_status> {}
