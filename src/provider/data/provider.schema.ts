import { provider } from '@prisma/client';
import { CreateProviderArticleSchema } from 'src/provider-article/data/provider-article.schema';
import { CommonRepository } from 'types/common';
import { z } from 'zod';

export interface ProviderRepository extends CommonRepository<provider> {}

export const CreateProviderSchema = z.object({
  provider: z.object({
    cuit: z.number(),
    name: z.string(),
    is_default: z.boolean().optional().default(false),
    single_shipment_cost: z.number(),
    shipment_time: z.date(),
    shipment_max_size: z.number(),
  }),
  articles: CreateProviderArticleSchema.array(),
});

export const UpdateProviderSchema = z.object({
  cuit: z.number().optional(),
  name: z.string().optional(),
  is_default: z.boolean().optional(),
  single_shipment_cost: z.number().optional(),
  shipment_time: z.date().optional(),
  shipment_max_size: z.number().optional(),
});
