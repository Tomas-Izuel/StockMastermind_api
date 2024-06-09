import { provider_article } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface ProviderArticleRepository
  extends CommonRepository<provider_article> {}
