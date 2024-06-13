import { article } from '@prisma/client';
import { CommonRepository, Filter } from 'types/common';
import {
  ArticleQueryParamsSchema,
  CreateArticleSchema,
} from './article.schema';
import { z } from 'zod';

export interface ArticleRepository extends CommonRepository<article> {}

export type CreateArticleDto = z.infer<typeof CreateArticleSchema>;

export type ArticleQueryParams = z.infer<typeof ArticleQueryParamsSchema>;
