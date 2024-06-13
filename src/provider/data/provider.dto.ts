import { CreateProviderArticleDto } from 'src/provider-article/data/provider-article.dto';

export class CreateProviderDto {
  provider: {
    cuit: number;
    name: string;
    is_default: boolean;
    single_shipment_cost: number;
    shipment_time: Date;
    shipment_max_size: number;
  };
  articles: CreateProviderArticleDto[];
}

export class UpdateProviderDto {
  cuit?: number;
  name?: string;
  is_default?: boolean;
  single_shipment_cost?: number;
  shipment_time?: Date;
  shipment_max_size?: number;
}
