import { CommonPaginationDto } from 'src/lib/schemas/common.schema';

export class ArticleQueryParams implements CommonPaginationDto {
  limit: number;
  page: number;
  sort: string;
  sort_dir: 'ASC' | 'DESC';
  search: string;
  family_id: number;
}

export interface Article {
  article_id?: number;
  quantity?: number;
  order_id?: number;
}

export interface ArticleOrder {
  article_id: number;
  quantity: number;
}

export interface OrderArticleDTO {
  id?: number;
  article_id: number;
  quantity: number;
  order_id: number;
}


export interface Data {
  articles: Article[];
}


export interface ArticleWithPrice {
  article_id: number;
  price: number;
  provider_id: number;
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
