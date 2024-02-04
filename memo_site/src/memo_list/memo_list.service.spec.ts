import { Test, TestingModule } from '@nestjs/testing';
import { MemoListService } from './memo_list.service';

describe('MemoListService', () => {
  let service: MemoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoListService],
    }).compile();

    service = module.get<MemoListService>(MemoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
