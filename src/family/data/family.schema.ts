import { z } from 'zod';

export const CreateFamilySchema = z.object({
  name: z.string(),
});
