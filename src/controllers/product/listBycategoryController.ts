import { Request, Response } from "express";
import { ListBycategoryService } from "../../services/product/listBycategoryService";


class ListBycategoryController {

    async handle(req: Request, res: Response) {

        const category_idForReq = req.query.category_id as string

        const productsFunction = new ListBycategoryService()

        const products = await productsFunction.execute(category_idForReq)

        res.json(products)

    }
}


export {ListBycategoryController}