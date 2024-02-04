import { Repository } from 'typeorm';
import { MemoList } from './memo_list.interface';
import { MemoEntity } from './memo.entity';
export declare class MemoListService {
    private readonly memoRepository;
    constructor(memoRepository: Repository<MemoEntity>);
    private readonly memoList;
    create(memo: MemoEntity): Promise<MemoEntity>;
    findAll(): Promise<MemoEntity[]>;
    findById(id: any): Promise<MemoEntity>;
    remove(id: number): Promise<MemoEntity>;
    findByIndex(index: number): MemoList | null;
    edit(_memo: any): Promise<import("typeorm").UpdateResult>;
}
