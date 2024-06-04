import { IsEnum, IsOptional, IsString } from 'class-validator';
import { sortDir } from 'src/data/types/common/common';
import { CommonPaginationParams } from './common.validator';

enum sortItems {
  STOCK = 'stock',
}

export class ArticleQueryParams extends CommonPaginationParams {
  @IsString()
  @IsOptional()
  family_id: string;
}
