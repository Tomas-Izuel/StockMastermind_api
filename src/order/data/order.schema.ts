import { CreateOrderArticleSchema } from 'src/order-article/data/order-article.schema';
import { z } from 'zod';

export const CreateOrderSchema = z.object({
  code: z.string(),
  provider_id: z.number().optional(),
  articles: CreateOrderArticleSchema.array(),
});
