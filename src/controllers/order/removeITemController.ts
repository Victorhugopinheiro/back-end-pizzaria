
import { Request, Response } from "express";
import { RemoveITemService } from "../../services/order/removeITemService";

class RemoveITemController{

    async handle(req:Request, res:Response){

        const item_id = req.query.item_id as string


        const removeItem = new RemoveITemService()

        const remove = await removeItem.execute(item_id)

        res.json(remove)
    }
}


export {RemoveITemController}