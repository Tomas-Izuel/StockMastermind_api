import { z } from 'zod';

export const CreateProviderArticleSchema = z.object({
  price: z.number(),
  article_id: z.number(),
});
