import { order_status } from '@prisma/client';
import { CommonRepository } from 'types/common';

export interface OrderStatusRepository extends CommonRepository<order_status> {}
