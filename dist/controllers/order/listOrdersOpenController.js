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
exports.ListOrdersOpenController = void 0;
const listOrdersOpenService_1 = require("../../services/order/listOrdersOpenService");
class ListOrdersOpenController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getOrdersOpen = new listOrdersOpenService_1.ListOrdersOpenService();
            const orderOpen = yield getOrdersOpen.execute();
            res.json(orderOpen);
        });
    }
}
exports.ListOrdersOpenController = ListOrdersOpenController;
