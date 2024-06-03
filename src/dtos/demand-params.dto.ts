import { IsNumber, IsString } from "class-validator";


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