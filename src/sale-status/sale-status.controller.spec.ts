import { Test, TestingModule } from '@nestjs/testing';
import { SaleStatusController } from './sale-status.controller';

describe('SaleStatusController', () => {
  let controller: SaleStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleStatusController],
    }).compile();

    controller = module.get<SaleStatusController>(SaleStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
