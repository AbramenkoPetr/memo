import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoListController } from './memo_list.controller';
import { MemoListService } from './memo_list.service';
import { MemoEntity } from './memo.entity';

@Module({
  controllers: [MemoListController],
  providers: [MemoListService],
  imports:  [
    TypeOrmModule.forFeature([MemoEntity]),
  ]
})
export class MemoListModule {}
