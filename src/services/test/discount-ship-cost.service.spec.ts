import { Test, TestingModule } from '@nestjs/testing';
import { DiscountShipCostService } from '../discount-ship-cost.service';

describe('DiscountShipCostService', () => {
  let service: DiscountShipCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountShipCostService],
    }).compile();

    service = module.get<DiscountShipCostService>(DiscountShipCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
