import { Test, TestingModule } from '@nestjs/testing';
import { DiscountShipCostController } from '../discount-ship-cost.controller';

describe('DiscountShipCostController', () => {
  let controller: DiscountShipCostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountShipCostController],
    }).compile();

    controller = module.get<DiscountShipCostController>(
      DiscountShipCostController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
