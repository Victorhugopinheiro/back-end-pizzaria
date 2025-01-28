import prismaClient from "../../prisma"


class SendOrderService{

    async execute(order_id:string){

        const updateOrder = await prismaClient.order.update({

            where:{
                id:order_id
            },
            data:{
                draft:false
            }
        })


        return (updateOrder)
    }
}


export {SendOrderService}