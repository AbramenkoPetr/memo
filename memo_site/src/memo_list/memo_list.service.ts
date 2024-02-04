import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemoList } from './memo_list.interface';
import { MemoEntity } from './memo.entity';

@Injectable()
export class MemoListService {
    constructor(
        @InjectRepository(MemoEntity)
        private readonly memoRepository: Repository<MemoEntity>,
        ) {}
    
        private readonly memoList: MemoList[]=[];
    // create(memo: MemoList): number {
    //     return this.memoList.push(memo);
    // }
    async create(memo: MemoEntity) {
        return await this.memoRepository.save(memo);
    }
    async findAll(): Promise<MemoEntity[]> {
        const memo = await this.memoRepository.find({});
        //console.log('MemoListService memo ', memo);
        return memo;
        }
    // findAll(): MemoList[] {
    //     return this.memoList;
    // }
    
    async findById(id): Promise<MemoEntity> {
        const memo1s = await this.memoRepository.find({});
        const memo1 = memo1s.find(el => el.id == id);
        //console.log('news1 ', news1);
        return memo1;
        }

    async remove(id: number) {
        const _memo = await this.findById(id);
        // const comments = await this.commentsService.find(id);
        // comments.forEach(e => this.commentsService.remove(e.id));
        return await this.memoRepository.remove(_memo);
        }
    
    findByIndex(index: number): MemoList|null {
        console.assert(typeof this.memoList[index] !== 'undefined', '[findByIndex] Invalid')
        if (typeof this.memoList[index] !== 'undefined') {
        return this.memoList[index]
         }
        return null
    }
    async edit(/*id: number*/_memo) {
        const id = _memo.id;
        //const _whs = await this.findById(id);
        //console.log('whsservice edit _whs ', _news);
        return await this.memoRepository.update(id, _memo);
      }

}


