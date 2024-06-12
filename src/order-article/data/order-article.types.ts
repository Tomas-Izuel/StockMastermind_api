import { sale_article } from '@prisma/client';
import { CommonRepository } from 'types/common';

export interface OrderArticleRepository
  extends CommonRepository<sale_article> {}
