import prismaClient from "../../prisma";

class DetailUserService{

    async execute(user_id:string){

       const user = prismaClient.user.findFirst({
            where:{
                id:user_id
            }
        })
        

        return user
    }
}


export {DetailUserService}