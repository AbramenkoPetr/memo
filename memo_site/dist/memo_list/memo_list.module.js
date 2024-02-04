"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoListModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const memo_list_controller_1 = require("./memo_list.controller");
const memo_list_service_1 = require("./memo_list.service");
const memo_entity_1 = require("./memo.entity");
let MemoListModule = class MemoListModule {
};
exports.MemoListModule = MemoListModule;
exports.MemoListModule = MemoListModule = __decorate([
    (0, common_1.Module)({
        controllers: [memo_list_controller_1.MemoListController],
        providers: [memo_list_service_1.MemoListService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([memo_entity_1.MemoEntity]),
        ]
    })
], MemoListModule);
//# sourceMappingURL=memo_list.module.js.map