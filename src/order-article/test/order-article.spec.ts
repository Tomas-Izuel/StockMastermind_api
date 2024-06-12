import { Test, TestingModule } from '@nestjs/testing';
import { OrderArticle } from '../order-article';

describe('OrderArticle', () => {
  let provider: OrderArticle;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderArticle],
    }).compile();

    provider = module.get<OrderArticle>(OrderArticle);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
