import prismaClient from "../../prisma";

class OrderDetailService{

    async execute(order_id:string){

        const showItems = await prismaClient.item.findMany({
            where:{
                order_id:order_id
            },
            include:{
                product:true,
                order:true
            }
        })

        return(showItems)

    }
}


export {OrderDetailService}