import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/deleleOrderService";

class DeleteOrderController{

    async handle(req:Request, res:Response){
        const order_id = req.query.order_id as string

        const deleteOrder = new DeleteOrderService()
        const deletandoOrder = await deleteOrder.execute(order_id)


        res.json(deletandoOrder)
    }
}


export {DeleteOrderController}