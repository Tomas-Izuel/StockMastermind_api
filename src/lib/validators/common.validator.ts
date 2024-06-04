import { IsEnum, IsOptional, IsString } from 'class-validator';
import { sortDir } from 'src/data/types/common/common';

export class CommonPaginationParams {
  @IsString()
  @IsOptional()
  page: string;
  @IsString()
  @IsOptional()
  page_size: string;
  @IsString()
  @IsOptional()
  search: string;
  @IsString()
  @IsOptional()
  sort: string;
  @IsEnum(sortDir)
  @IsOptional()
  sort_dir: string;
}
