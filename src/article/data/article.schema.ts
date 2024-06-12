import { CommonPaginationSchema } from 'src/lib/schemas/common.schema';
import { z } from 'zod';

export const ArticleQueryParamsSchema = CommonPaginationSchema.extend({
  family_id: z.number().optional(),
});

export const CreateArticleSchema = z.object({
  code: z.string(),
  name: z.string(),
  model: z.string(),
  price: z.number(),
  stock: z.number(),
  security_stock: z.number(),
  max_stock: z.number(),
  order_point: z.number(),
  storage_cost: z.number(),
  size: z.number(),
  family_id: z.number(),
});

export const UpdateArticleSchema = z.object({
  code: z.string().optional(),
  name: z.string().optional(),
  model: z.string().optional(),
  price: z.number().optional(),
  stock: z.number().optional(),
  security_stock: z.number().optional(),
  max_stock: z.number().optional(),
  order_point: z.number().optional(),
  storage_cost: z.number().optional(),
  size: z.number().optional(),
  family_id: z.number().optional(),
});
