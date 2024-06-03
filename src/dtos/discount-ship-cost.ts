import { IsNumber, IsOptional } from "class-validator";


export class CreateDiscountShipCost {
    @IsNumber()
    start_price: number;
    @IsNumber()
    end_price: number;
    @IsNumber()
    discount: number;
}

export class EditeDiscountShipCost {
    @IsNumber()
    @IsOptional()
    start_price: number;
    @IsNumber()
    @IsOptional()
    end_price: number;
    @IsNumber()
    @IsOptional()
    discount: number;
}