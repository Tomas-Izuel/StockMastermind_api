import { Test, TestingModule } from '@nestjs/testing';
import { Sale } from '../sale';

describe('Sale', () => {
  let provider: Sale;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sale],
    }).compile();

    provider = module.get<Sale>(Sale);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
