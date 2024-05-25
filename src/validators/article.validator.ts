import { IsEnum, IsOptional, IsString } from 'class-validator';
import { sortDir } from 'src/types/common';

enum sortItems {
  STOCK = 'stock',
}

export class ArticleQueryParams {
  @IsString()
  @IsOptional()
  search: string;
  @IsEnum(sortItems)
  @IsOptional()
  sort: string;
  @IsEnum(sortDir)
  @IsOptional()
  sort_dir: string;
  @IsString()
  @IsOptional()
  family_id: string;
}
