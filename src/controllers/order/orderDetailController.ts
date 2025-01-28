import { Request, Response } from "express";
import { OrderDetailService } from "../../services/order/orderDetailService";

class OrderDetailController{

    async handle(req:Request, res:Response){
        const order_id = req.query.order_id as string

        const getOrderDetail = new OrderDetailService()
        const orderDetail = await getOrderDetail.execute(order_id)

        res.json(orderDetail)

    }
}


export {OrderDetailController}