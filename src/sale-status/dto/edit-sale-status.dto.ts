import { IsOptional, IsString } from 'class-validator';

export class EditSaleStatusDto {
  @IsString({
    message: 'El nombre debe ser un string.',
  })
  @IsOptional()
  status: string;
}
