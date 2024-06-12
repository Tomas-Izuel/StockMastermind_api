import { z } from 'zod';
import { CreateProviderSchema } from './provider.schema';

export type CreateProvider = z.infer<typeof CreateProviderSchema>;
