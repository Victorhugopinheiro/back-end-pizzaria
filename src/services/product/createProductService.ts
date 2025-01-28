import prismaClient from "../../prisma"

interface ProductProps{
    name:string
    price:string
    description:string
    banner:string
    category_id:string
}

class CreateProductService{

    async execute({banner ,category_id, description, name, price}:ProductProps){


        const products = prismaClient.product.create({
            data:{
                banner,
                category_id,
                description,
                name,
                price
            }
        })

        return (products)


    }
}

export {CreateProductService}