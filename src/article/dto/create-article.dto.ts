import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateArticleDto {
  @IsString({
    message: 'El código del artículo debe ser un string.',
  })
  @IsNotEmpty({
    message: 'El código del artículo no puede estar vacío.',
  })
  code: string;
  @IsString({
    message: 'El nombre del artículo debe ser un string.',
  })
  @IsNotEmpty({
    message: 'El nombre del artículo no puede estar vacío.',
  })
  name: string;
  @IsString({
    message: 'La marca del artículo debe ser un string.',
  })
  @IsNotEmpty({
    message: 'La marca del artículo no puede estar vacía.',
  })
  model: string;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 2,
  })
  @Min(0, {
    message: 'El precio de venta debe ser mayor o igual a 0.',
  })
  salePrice: number;
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 2,
  })
  @Min(0, {
    message: 'El precio de compra debe ser mayor o igual a 0.',
  })
  purchasePrice: number;
  @IsInt({
    message: 'El stock debe ser un número entero.',
  })
  stock: number;
  @IsInt({
    message: ' La cantidad de reposición debe ser un número entero.',
  })
  repositionCount: number;
  @IsInt({
    message: 'El punto de pedido debe ser un número entero.',
  })
  requestPoint: number;
  @IsInt({
    message: 'El id de la familia debe ser un número entero.',
  })
  familyId: number;
}
