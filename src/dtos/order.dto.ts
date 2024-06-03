import { IsDate, IsNumber, IsOptional } from "class-validator";

export class CreateOrderDto {
    @IsDate({
        message: 'La fecha debe ser un objeto Date.'
    })
    date: Date;
    @IsNumber({})
    provider_id: number;
    @IsNumber({})
    order_status_id: number;
}

export class EditOrderDto {
    @IsDate({
        message: 'La fecha debe ser un objeto Date.'
    })
    @IsOptional()
    date: Date;
    @IsNumber({})
    @IsOptional()
    provider_id: number;
    @IsNumber({})
    @IsOptional()
    order_status_id: number;
}