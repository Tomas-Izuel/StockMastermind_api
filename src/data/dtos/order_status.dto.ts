import { IsOptional, IsString } from 'class-validator';

export class CreateOrderStatusDto {
  @IsString({
    message: 'El estado de la orden debe ser un string.',
  })
  name: string;
  
}

export class UpdateOrderStatusDto {
  @IsString({
    message: 'El estado de la orden debe ser un string.',
  })
  @IsOptional()
  name: string;
}