import { MemoListService } from './memo_list.service';
import { MemoEntity } from './memo.entity';
export declare class MemoListController {
    private readonly MemoListService;
    constructor(MemoListService: MemoListService);
    getAllView(): Promise<{
        memo: MemoEntity[];
        title: string;
    }>;
    funFic(): void;
    create(data: any): Promise<MemoEntity>;
    delete(id: string): Promise<MemoEntity>;
    getid(id: string): Promise<MemoEntity>;
    edit(id: string): Promise<{
        memo: MemoEntity;
    }>;
    edit1(memo: any): Promise<import("typeorm").UpdateResult>;
}
