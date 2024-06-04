import { Test, TestingModule } from '@nestjs/testing';
import { SaleArticleController } from '../sale-article.controller';

describe('SaleArticleController', () => {
  let controller: SaleArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleArticleController],
    }).compile();

    controller = module.get<SaleArticleController>(SaleArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
