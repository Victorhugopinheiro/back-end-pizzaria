import { Request, Response } from "express";
import { ShowCategoryService } from "../../services/category/showCategoryService";

class ShowCategoryController{

    async handle(req:Request, res:Response){

        const categoryFunction = new ShowCategoryService()
        const showCategory = await categoryFunction.execute()

        res.json(showCategory)
        
    }
}

export {ShowCategoryController}