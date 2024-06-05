import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProviderDto {
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  @Min(11)
  @Max(11)
  cuit: number;
  @IsString({
    message: 'El nombre del proveedor debe ser un string válido.',
  })
  name: string;
  @IsBoolean()
  @IsOptional()
  is_default: boolean;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 2,
  })
  single_shipment_cost: number;
  shipment_time: Date;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  shipment_max_size: number;
}

export class CreateArticleProviderDto {
  @IsNumber()
  article_id: number;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 2,
  })
  price: number;
}

export class CreateProvider {
  provider: CreateProviderDto;
  articles: CreateArticleProviderDto[] = [];
}

export class UpdateProviderDto {
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  @Min(11)
  @Max(11)
  @IsOptional()
  cuit: number;
  @IsString({
    message: 'El nombre del proveedor debe ser un string válido.',
  })
  @IsOptional()
  name: string;
  @IsBoolean()
  @IsOptional()
  is_default: boolean;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 2,
  })
  @IsOptional()
  single_shipment_cost: number;
  @IsOptional()
  shipment_time: Date;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  @IsOptional()
  shipment_max_size: number;
}
