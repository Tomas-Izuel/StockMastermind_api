import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateArticleDto {
  @IsString({
    message: 'El código del artículo debe ser un string.',
  })
  @IsNotEmpty({
    message: 'El código del artículo no puede estar vacío.',
  })
  @IsOptional()
  code: string;
  @IsString({
    message: 'El nombre del artículo debe ser un string.',
  })
  @IsNotEmpty({
    message: 'El nombre del artículo no puede estar vacío.',
  })
  @IsOptional()
  name: string;
  @IsString({
    message: 'La marca del artículo debe ser un string.',
  })
  @IsNotEmpty({
    message: 'La marca del artículo no puede estar vacía.',
  })
  @IsOptional()
  model: string;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 2,
  })
  @Min(0, {
    message: 'El precio de venta debe ser mayor o igual a 0.',
  })
  @IsOptional()
  sale_price: number;
  @IsInt({
    message: 'El stock debe ser un número entero.',
  })
  @Min(0, {
    message: 'El stock debe ser mayor o igual a 0.',
  })
  @IsOptional()
  stock: number;
  @IsInt({
    message: 'El stock de seguridad debe ser un número entero.',
  })
  @Min(0, {
    message: 'El stock de seguridad debe ser mayor o igual a 0.',
  })
  @IsOptional()
  security_stock: number;
  @IsInt({
    message: ' La cantidad de reposición debe ser un número entero.',
  })
  @Min(0, {
    message: 'La cantidad de reposición debe ser mayor o igual a 0.',
  })
  @IsOptional()
  max_stock: number;
  @IsInt({
    message: 'El punto de pedido debe ser un número entero.',
  })
  @Min(0, {
    message: 'El punto de pedido debe ser mayor o igual a 0.',
  })
  @IsOptional()
  order_point: number;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 2,
  })
  @Min(0, {
    message: 'El costo de almacenamiento debe ser mayor o igual a 0.',
  })
  @IsOptional()
  storage_cost: number;
  @IsInt({
    message: 'El id de la familia debe ser un número entero.',
  })
  @IsOptional()
  family_id: number;
}
