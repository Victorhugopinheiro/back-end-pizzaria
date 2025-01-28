import { Router } from 'express';


import { CreateUserController } from './controllers/user/createUserController';
import { authUserController } from './controllers/user/authUserController';
import { DetailUserController } from './controllers/user/detailUserController';
import { MiddlewareAuth } from './middleware/isAutenticated';
import { CreateCategoryController } from './controllers/category/createCategoryController';
import { ShowCategoryController } from './controllers/category/showCategoryController';
import { CreateProductController } from './controllers/product/createProductController';

import multer from 'multer';

import uploadConfig from './config/multer';
import { ListBycategoryController } from './controllers/product/listBycategoryController';
import { CreateOrderController } from './controllers/order/createOrderController';
import { DeleteOrderController } from './controllers/order/deleteOrdercontroller';
import { AddItemOrderController } from './controllers/order/addItemOrderController';
import { RemoveITemController } from './controllers/order/removeITemController';
import { SendOrderController } from './controllers/order/sendOrderController';
import { ListOrdersOpenController } from './controllers/order/listOrdersOpenController';
import { OrderDetailController } from './controllers/order/orderDetailController';
import { OrderFinishController } from './controllers/order/orderFinishController';

const router = Router();

//iniciando multer de imagem
const upload = multer(uploadConfig.upload("./tmp"))

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new authUserController().handle)

router.get('/me',MiddlewareAuth, new DetailUserController().handle)



//Rotas de category

router.post("/category", MiddlewareAuth, new CreateCategoryController().handle)

router.get("/category", MiddlewareAuth, new ShowCategoryController().handle)


//Rotas de produto
//router.post("/products", MiddlewareAuth, upload.single("file"), new CreateProductController().handle)
router.post("/products", MiddlewareAuth, new CreateProductController().handle)

router.get("/products", MiddlewareAuth, new ListBycategoryController().handle)

//Rotas de order
router.post("/order", MiddlewareAuth, new CreateOrderController().handle)
router.delete("/order", MiddlewareAuth, new DeleteOrderController().handle)
router.post("/order/item", MiddlewareAuth, new AddItemOrderController().handle)
router.delete("/order/remove", MiddlewareAuth, new RemoveITemController().handle)
router.put("/order/send", MiddlewareAuth, new SendOrderController().handle)

router.get("/orders", MiddlewareAuth, new ListOrdersOpenController().handle)
router.get("/order/detail", MiddlewareAuth, new OrderDetailController().handle)
router.put("/order/finish", MiddlewareAuth, new OrderFinishController().handle )


export { router }; 


