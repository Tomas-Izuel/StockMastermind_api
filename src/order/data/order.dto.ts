import { CreateOrderArticleDto } from 'src/order-article/data/order-article.dto';

export class CreateOrderDto {
  code: string;
  provider_id?: number;
  articles: CreateOrderArticleDto[];
}
