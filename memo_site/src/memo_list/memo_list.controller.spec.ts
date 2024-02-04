import { Test, TestingModule } from '@nestjs/testing';
import { MemoListController } from './memo_list.controller';

describe('MemoListController', () => {
  let controller: MemoListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoListController],
    }).compile();

    controller = module.get<MemoListController>(MemoListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
