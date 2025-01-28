import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import {sign} from "jsonwebtoken"

interface LoginProps{
    email: string
    password:string
}

class authUserService{

    async execute({password, email}:LoginProps){

        //procurando se o email passado está casdastrado
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })


        if(!user){
            throw new Error("User/password invalidos")
        }

        //comparando senha com a do banco de dados
        const truePassword = compare(password, user.password)

        if(!truePassword){
            throw new Error("User/password invalidos")
        }

        //se deu certo vamos gerar token para o usuário

        const token = sign(
            {
                name:user.name,
                email:user.email
            },
            process.env.JWT_SECRET,
            {
                subject:user.id,
                expiresIn:"30d"
            }
        )

        return{
            name:user.name,
            email:user.email,
            id:user.id,
            token:token
        }

        
        
        

    }
}

export {authUserService}