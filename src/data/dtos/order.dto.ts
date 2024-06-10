import { IsNumber, IsString, Min } from 'class-validator';

class ArticleOrderDto {
  @IsNumber()
  article_id: number;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  @Min(1, {
    message: 'La cantidad del articulo debe ser mayor a 0.',
  })
  quantity: number;
}

export class CreateOrderDto {
  @IsString()
  code: string;
  @IsNumber()
  provider_id?: number;
  articles: ArticleOrderDto[];
}
