import { CommonPaginationDto } from 'src/lib/schemas/common.schema';

export class ArticleQueryParams implements CommonPaginationDto {
  limit: number;
  page: number;
  sort: string;
  sort_dir: 'ASC' | 'DESC';
  search: string;
  family_id: number;
}

export class CreateArticleDto {
  code: string;
  name: string;
  model: string;
  price: number;
  stock: number;
  security_stock: number;
  max_stock: number;
  order_point: number;
  storage_cost: number;
  size: number;
  family_id: number;
}

export class UpdateArticleDto {
  code?: string;
  name?: string;
  model?: string;
  price?: number;
  stock?: number;
  security_stock?: number;
  max_stock?: number;
  order_point?: number;
  storage_cost?: number;
  size?: number;
  family_id?: number;
}
