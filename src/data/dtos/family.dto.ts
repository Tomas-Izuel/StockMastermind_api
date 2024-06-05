import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFamilyDto {
  @IsString({
    message: 'El nombre de la familia debe ser un string.',
  })
  @IsNotEmpty({
    message: 'El nombre de la familia no puede estar vacío.',
  })
  name: string;
}

export class EditFamilyDto {
    @IsString({
      message: 'El nombre de la familia debe ser un string.',
    })
    @IsNotEmpty({
      message: 'El nombre de la familia no puede estar vacío.',
    })
    name: string;
  }