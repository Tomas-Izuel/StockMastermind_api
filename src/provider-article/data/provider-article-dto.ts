import { z } from 'zod';
import { CreateProviderArticleSchema } from './provider-article.schema';

export type CreateProviderArticle = z.infer<typeof CreateProviderArticleSchema>;
