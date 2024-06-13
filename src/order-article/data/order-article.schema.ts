import { z } from 'zod';

export const CreateOrderArticleSchema = z.object({
  article_id: z.number(),
  quantity: z.number(),
});
