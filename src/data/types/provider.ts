import { provider } from '@prisma/client';
import { CommonRepository } from './common/repository.common';

export interface ProviderRepository extends CommonRepository<provider> {}

export interface ProviderData {
  cuit: number;
  name: string;
  is_default?: boolean;
  single_shipment_cost: number;
  shipment_time: Date;
  shipment_max_size: number;
}

export class ArticleProviderData {
  article_id: number;
  price: number;
}

export interface CreateProviderData {
  provider: ProviderData;
  articles: ArticleProviderData[];
}
