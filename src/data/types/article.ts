import { article } from '@prisma/client';
import { CommonRepository, Filter } from './common/repository.common';

export interface ArticleRepository extends CommonRepository<article> {}

export interface FilterArticle extends Filter {
  family_id?: number;
}
