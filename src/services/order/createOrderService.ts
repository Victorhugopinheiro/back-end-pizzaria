import prismaClient from "../../prisma"

interface Order{
    name: string
    table: number
}


class CreateOrderService{

    async execute({name, table}:Order){
        

       const order = await prismaClient.order.create({
        data:{
            name:name,
            table:table
        }
       })


       return(order)
    }
}


export {CreateOrderService}