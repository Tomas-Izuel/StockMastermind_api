import { order } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface OrderRepository extends CommonRepository<order> {}

export interface CreateOrderDto {
  code: string;
  provider_id?: number;
  articles: [
    {
      article_id: number;
      quantity: number;
    },
  ];
}
