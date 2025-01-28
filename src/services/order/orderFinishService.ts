import prismaClient from "../../prisma";


class OrderFinishService{

    async execute(order_id:string){
        const changeStatusOrder = await prismaClient.order.update({
            where:{
                id:order_id
            },
            data:{
                status:true
            }
        })

        return (changeStatusOrder)

    }
}


export {OrderFinishService}