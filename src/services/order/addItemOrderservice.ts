import prismaClient from "../../prisma"

interface ItemProps{

    amount:number
    product_id:string
    order_id:string
}


class AddItemOrderService{

    async execute({amount, order_id, product_id}:ItemProps){


        const addItem = await prismaClient.item.create({

            data:{
                amount:amount,
                order_id:order_id,
                product_id:product_id
            }
        })


        return(addItem)

    }
}


export {AddItemOrderService}