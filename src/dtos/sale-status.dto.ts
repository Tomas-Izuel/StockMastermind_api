import { IsOptional, IsString } from 'class-validator';

export class CreateSaleStatusDto {
  @IsString({
    message: 'El nombre debe ser un string.',
  })
  status: string;
}

export class EditSaleStatusDto {
  @IsString({
    message: 'El nombre debe ser un string.',
  })
  @IsOptional()
  status: string;
}
