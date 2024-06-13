export class CreateSaleDto {
  sale: {
    code: string;
  };
  articles: {
    articleId: number;
    quantity: number;
  }[];
}
