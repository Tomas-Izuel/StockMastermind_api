import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
    @IsString({
        message: 'El nombre del cliente debe ser un string.',
    })
    name: string;
    @IsNumber()
    cuil: number;
}

export class EditClientDto {
    @IsString({
        message: 'El nombre del cliente debe ser un string.',
    })
    @IsOptional()
    name: string;
}