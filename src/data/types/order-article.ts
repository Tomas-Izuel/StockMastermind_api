import { order_article } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface OrderArticleRepository
  extends CommonRepository<order_article> {}
