import { IsNumber, IsOptional } from "class-validator";


export class CreateOrderArticle {
    @IsNumber()
    quantity: number;
    @IsNumber()
    subtotal: number;
    @IsNumber()
    article_id: number;
    @IsNumber()
    order_id: number;
}

export class EditOrderArticle {
    @IsNumber()
    @IsOptional()
    quantity: number;
    @IsNumber()
    @IsOptional()
    subtotal: number;
    @IsNumber()
    @IsOptional()
    article_id: number;
    @IsNumber()
    @IsOptional()
    order_id: number;
}