import { IsString } from 'class-validator';

export class CreateSaleStatusDto {
  @IsString({
    message: 'El nombre debe ser un string.',
  })
  status: string;
}
