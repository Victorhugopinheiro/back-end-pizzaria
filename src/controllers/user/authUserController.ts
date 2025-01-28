import { Request, Response } from "express"
import { authUserService } from "../../services/user/authUserService"

class authUserController{

    async handle (req:Request, res:Response){

        const {email, password} = req.body

        const authService = new authUserService()

        const dataLogin = await authService.execute({
            email,
            password
        })

        res.json(dataLogin)
    }
}


export {authUserController}