import { IsNumber, IsOptional, IsString } from "class-validator";


export class CreateDemandParamDto {
    @IsString({
        message: 'El método de solución debe ser un string.'
    })
    method: string;
    @IsNumber({
        allowNaN: false,
        allowInfinity: false,
    })
    aceptable_error: number;
}

export class EditDemandParamDto {
    @IsString({
        message: 'El método de solución debe ser un string.'
    })
    @IsOptional()
    method: string;
    @IsNumber({
        allowNaN: false,
        allowInfinity: false,
    })
    @IsOptional()
    aceptable_error: number;
}