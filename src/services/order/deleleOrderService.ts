import prismaClient from "../../prisma";


class DeleteOrderService{

    async execute(order_id:string){

        const orderDelete = await prismaClient.order.delete({
            where:{
                id: order_id
            }
        })


        return (orderDelete)
    }
}


export {DeleteOrderService}