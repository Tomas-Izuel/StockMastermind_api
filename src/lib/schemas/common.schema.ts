import { z } from 'zod';

export const CommonPaginationSchema = z.object({
  limit: z.number().optional(),
  page: z.number().optional(),
  sort: z.string().optional(),
  sort_dir: z.enum(['ASC', 'DESC']).optional(),
  search: z.string().optional(),
});

export type CommonPaginationDto = z.infer<typeof CommonPaginationSchema>;
