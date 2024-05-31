import { IsOptional, IsString } from 'class-validator';

export class CreateOrderStatusDto {
  @IsString({
    message: 'El estado de la orden debe ser un string.',
  })
  status: string;
}

export class UpdateOrderStatusDto {
  @IsString({
    message: 'El estado de la orden debe ser un string.',
  })
  @IsOptional()
  status: string;
}
