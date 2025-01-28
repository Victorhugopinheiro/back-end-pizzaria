import prismaClient from "../../prisma";



class ListOrdersOpenService{
    async execute(){

        const openOrders = await prismaClient.order.findMany({
            where:{
                draft:false,
                status:false
            },

            orderBy:{
                created_at:"desc"
            }
        })

        return (openOrders)

    }
}


export {ListOrdersOpenService}