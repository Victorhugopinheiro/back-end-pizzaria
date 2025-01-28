
import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/createOrderService";

class CreateOrderController{

    async handle(req:Request, res:Response){
        const {name, table} = req.body

        const CreateOrder = new CreateOrderService()
        const order = await CreateOrder.execute({name, table})

        res.json(order)

    }
}


export {CreateOrderController}