import { sale_article } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface SaleArticleRepository extends CommonRepository<sale_article> {}
