import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/sendOrderService";

class SendOrderController{

    async handle(req:Request, res:Response){
        const {order_id} = req.body

        const findOrder = new SendOrderService()
        const update_order = await findOrder.execute(order_id)


        res.json(update_order)
    }
}


export {SendOrderController}