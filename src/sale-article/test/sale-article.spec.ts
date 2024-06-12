import { Test, TestingModule } from '@nestjs/testing';
import { SaleArticle } from '../sale-article';

describe('SaleArticle', () => {
  let provider: SaleArticle;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleArticle],
    }).compile();

    provider = module.get<SaleArticle>(SaleArticle);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
