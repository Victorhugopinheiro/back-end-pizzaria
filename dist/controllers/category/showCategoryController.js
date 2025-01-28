"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowCategoryController = void 0;
const showCategoryService_1 = require("../../services/category/showCategoryService");
class ShowCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryFunction = new showCategoryService_1.ShowCategoryService();
            const showCategory = yield categoryFunction.execute();
            res.json(showCategory);
        });
    }
}
exports.ShowCategoryController = ShowCategoryController;
