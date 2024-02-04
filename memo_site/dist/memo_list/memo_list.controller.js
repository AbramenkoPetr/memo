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
exports.MemoListController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const HelperFileLoader_1 = require("../utils/HelperFileLoader");
const memo_list_service_1 = require("./memo_list.service");
const memo_entity_1 = require("./memo.entity");
let MemoListController = class MemoListController {
    constructor(MemoListService) {
        this.MemoListService = MemoListService;
    }
    async getAllView() {
        const memo = await this.MemoListService.findAll();
        return { memo, title: 'Список заметок!' };
    }
    funFic() { }
    async create(data) {
        console.log('memolistcontr memo', data);
        const _memoEntity = new memo_entity_1.MemoEntity();
        _memoEntity.title = data.title;
        _memoEntity.description = data.description;
        const _memo = await this.MemoListService.create(_memoEntity);
        return _memo;
    }
    async delete(id) {
        const idInt = parseInt(id);
        const remove = await this.MemoListService.remove(idInt);
        return remove;
    }
    async getid(id) {
        const idInt = parseInt(id);
        const memo = await this.MemoListService.findById(idInt);
        return memo;
    }
    async edit(id) {
        const idInt = parseInt(id);
        const memo = await this.MemoListService.findById(idInt);
        return { memo };
    }
    async edit1(memo) {
        const _memoEntity = await this.MemoListService.findById(memo.id);
        _memoEntity.title = memo.title;
        _memoEntity.description = memo.description;
        const _memo = await this.MemoListService.edit(_memoEntity);
        return _memo;
    }
};
exports.MemoListController = MemoListController;
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.Render)('memo-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MemoListController.prototype, "getAllView", null);
__decorate([
    (0, common_1.Get)('/add'),
    (0, common_1.Render)('add-memo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MemoListController.prototype, "funFic", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemoListController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemoListController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/detail/:id'),
    (0, common_1.Render)('memo-detail'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemoListController.prototype, "getid", null);
__decorate([
    (0, common_1.Get)('/edit/:id'),
    (0, common_1.Render)('memo-edit'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemoListController.prototype, "edit", null);
__decorate([
    (0, common_1.Post)('/edit'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('cover', {
        storage: (0, multer_1.diskStorage)({
            destination: HelperFileLoader_1.HelperFileLoader.destinationPath,
            filename: HelperFileLoader_1.HelperFileLoader.customFileName,
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemoListController.prototype, "edit1", null);
exports.MemoListController = MemoListController = __decorate([
    (0, common_1.Controller)('memo-list'),
    __metadata("design:paramtypes", [memo_list_service_1.MemoListService])
], MemoListController);
//# sourceMappingURL=memo_list.controller.js.map