import { IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString({
    message: 'El nombre del cliente debe ser un string.',
  })
  name: string;
}

export class EditClientDto {
  @IsString({
    message: 'El nombre del cliente debe ser un string.',
  })
  @IsOptional()
  name: string;
}
