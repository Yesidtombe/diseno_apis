import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { EstrellaMichelinService } from './estrella-michelin.service';

describe('EstrellaMichelinService', () => {
  let service: EstrellaMichelinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [EstrellaMichelinService],
    }).compile();

    service = module.get<EstrellaMichelinService>(EstrellaMichelinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
