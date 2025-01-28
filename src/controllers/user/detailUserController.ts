import { DetailUserService } from "../../services/user/detailUserService";
import { Request, Response } from "express";


    class DetailUserController{

        async handle(req:Request, res:Response){

            const user_id = req.user_id
            const detailService = new DetailUserService()
            const user = await detailService.execute(user_id)

            console.log(user_id)

            res.json(user)
        }
    }


    export {DetailUserController}