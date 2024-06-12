import { z } from 'zod';
import { CreateOrderSchema } from './order.schema';

export type CreateOrder = z.infer<typeof CreateOrderSchema>;
