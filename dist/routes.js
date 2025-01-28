"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createUserController_1 = require("./controllers/user/createUserController");
const authUserController_1 = require("./controllers/user/authUserController");
const detailUserController_1 = require("./controllers/user/detailUserController");
const isAutenticated_1 = require("./middleware/isAutenticated");
const createCategoryController_1 = require("./controllers/category/createCategoryController");
const showCategoryController_1 = require("./controllers/category/showCategoryController");
const createProductController_1 = require("./controllers/product/createProductController");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const listBycategoryController_1 = require("./controllers/product/listBycategoryController");
const createOrderController_1 = require("./controllers/order/createOrderController");
const deleteOrdercontroller_1 = require("./controllers/order/deleteOrdercontroller");
const addItemOrderController_1 = require("./controllers/order/addItemOrderController");
const removeITemController_1 = require("./controllers/order/removeITemController");
const sendOrderController_1 = require("./controllers/order/sendOrderController");
const listOrdersOpenController_1 = require("./controllers/order/listOrdersOpenController");
const orderDetailController_1 = require("./controllers/order/orderDetailController");
const orderFinishController_1 = require("./controllers/order/orderFinishController");
const router = (0, express_1.Router)();
exports.router = router;
//iniciando multer de imagem
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//-- ROTAS USER --
router.post('/users', new createUserController_1.CreateUserController().handle);
router.post('/session', new authUserController_1.authUserController().handle);
router.get('/me', isAutenticated_1.MiddlewareAuth, new detailUserController_1.DetailUserController().handle);
//Rotas de category
router.post("/category", isAutenticated_1.MiddlewareAuth, new createCategoryController_1.CreateCategoryController().handle);
router.get("/category", isAutenticated_1.MiddlewareAuth, new showCategoryController_1.ShowCategoryController().handle);
//Rotas de produto
//router.post("/products", MiddlewareAuth, upload.single("file"), new CreateProductController().handle)
router.post("/products", isAutenticated_1.MiddlewareAuth, new createProductController_1.CreateProductController().handle);
router.get("/products", isAutenticated_1.MiddlewareAuth, new listBycategoryController_1.ListBycategoryController().handle);
//Rotas de order
router.post("/order", isAutenticated_1.MiddlewareAuth, new createOrderController_1.CreateOrderController().handle);
router.delete("/order", isAutenticated_1.MiddlewareAuth, new deleteOrdercontroller_1.DeleteOrderController().handle);
router.post("/order/item", isAutenticated_1.MiddlewareAuth, new addItemOrderController_1.AddItemOrderController().handle);
router.delete("/order/remove", isAutenticated_1.MiddlewareAuth, new removeITemController_1.RemoveITemController().handle);
router.put("/order/send", isAutenticated_1.MiddlewareAuth, new sendOrderController_1.SendOrderController().handle);
router.get("/orders", isAutenticated_1.MiddlewareAuth, new listOrdersOpenController_1.ListOrdersOpenController().handle);
router.get("/order/detail", isAutenticated_1.MiddlewareAuth, new orderDetailController_1.OrderDetailController().handle);
router.put("/order/finish", isAutenticated_1.MiddlewareAuth, new orderFinishController_1.OrderFinishController().handle);
