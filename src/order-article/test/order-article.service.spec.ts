import { Test, TestingModule } from '@nestjs/testing';
import { OrderArticleService } from '../order-article.service';

describe('OrderArticleService', () => {
  let service: OrderArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderArticleService],
    }).compile();

    service = module.get<OrderArticleService>(OrderArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
