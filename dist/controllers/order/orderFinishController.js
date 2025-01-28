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
exports.OrderFinishController = void 0;
const orderFinishService_1 = require("../../services/order/orderFinishService");
class OrderFinishController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id } = req.body;
            const changeOrderStatus = new orderFinishService_1.OrderFinishService();
            const changeOrder = yield changeOrderStatus.execute(order_id);
            res.json(changeOrder);
        });
    }
}
exports.OrderFinishController = OrderFinishController;
