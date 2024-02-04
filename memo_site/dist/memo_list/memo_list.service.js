"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const memo_entity_1 = require("./memo.entity");
let MemoListService = class MemoListService {
    constructor(memoRepository) {
        this.memoRepository = memoRepository;
        this.memoList = [];
    }
    async create(memo) {
        return await this.memoRepository.save(memo);
    }
    async findAll() {
        const memo = await this.memoRepository.find({});
        return memo;
    }
    async findById(id) {
        const memo1s = await this.memoRepository.find({});
        const memo1 = memo1s.find(el => el.id == id);
        return memo1;
    }
    async remove(id) {
        const _memo = await this.findById(id);
        return await this.memoRepository.remove(_memo);
    }
    findByIndex(index) {
        console.assert(typeof this.memoList[index] !== 'undefined', '[findByIndex] Invalid');
        if (typeof this.memoList[index] !== 'undefined') {
            return this.memoList[index];
        }
        return null;
    }
    async edit(_memo) {
        const id = _memo.id;
        return await this.memoRepository.update(id, _memo);
    }
};
exports.MemoListService = MemoListService;
exports.MemoListService = MemoListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(memo_entity_1.MemoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MemoListService);
//# sourceMappingURL=memo_list.service.js.map