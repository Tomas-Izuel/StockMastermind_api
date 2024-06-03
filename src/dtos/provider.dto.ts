import { IsBoolean, IsString } from "class-validator";

export class CreateProviderDto {
    @IsString({
        message: 'El nombre debe ser un string.'
    })
    name: string;
    @IsBoolean({
        message: 'El valor debe ser un booleano.'
    })
    is_default: boolean;
}