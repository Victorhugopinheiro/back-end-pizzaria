import { Request,Response } from "express";
import { AddItemOrderService } from "../../services/order/addItemOrderservice";

class AddItemOrderController{

    async handle(req:Request, res:Response){

        const {product_id, order_id, amount} = req.body


        const createItem = new AddItemOrderService()

        const item = await createItem.execute({
            product_id,
            order_id,
            amount
        })

        res.json(item)


    }
}


export {AddItemOrderController}