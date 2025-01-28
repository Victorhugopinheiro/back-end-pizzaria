import { Request, Response } from "express";
import { createCategoryService } from "../../services/category/createCategoryService";

class CreateCategoryController {

    async handle(req: Request, res: Response) {
        const {name} = req.body;

        const category = new createCategoryService()

        const newCategory = await category.execute({name})

        res.json(newCategory)


    }
}

export {CreateCategoryController}