import { Request, Response } from "express";
import { OrderFinishService } from "../../services/order/orderFinishService";

class OrderFinishController{

    async handle(req:Request, res:Response){
        const {order_id} = req.body

        const changeOrderStatus = new OrderFinishService()
        const changeOrder = await changeOrderStatus.execute(order_id)


        res.json(changeOrder)
    }
}

export {OrderFinishController}