import { z } from 'zod';

export const CreateClientSchema = z.object({
  cuil: z.number(),
  name: z.string(),
});

export const UpdateClientSchema = z.object({
  cuil: z.number().optional(),
  name: z.string().optional(),
});
