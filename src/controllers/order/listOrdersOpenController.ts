import { Request, Response } from "express";
import { ListOrdersOpenService } from "../../services/order/listOrdersOpenService";

class ListOrdersOpenController{

    async handle(req:Request, res:Response){


        const getOrdersOpen = new ListOrdersOpenService()

        const orderOpen = await getOrdersOpen.execute()

        res.json(orderOpen)
    }
}


export {ListOrdersOpenController}