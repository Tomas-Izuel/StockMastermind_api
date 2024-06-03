import { IsDate, IsNumber, IsOptional } from "class-validator";

export class CreateSaleDto {
    @IsDate({
        message: 'La fecha de la venta debe ser una fecha.'
    })
    date: Date;
    @IsNumber()
    client_id: number;
    @IsNumber()
    sale_status_id: number;
}

export class EditSaleDto {
    @IsDate({
        message: 'La fecha de la venta debe ser una fecha.'
    })
    @IsOptional()
    date: Date;
    @IsNumber()
    @IsOptional()
    client_id: number;
    @IsNumber()
    @IsOptional()
    sale_status_id: number;
}