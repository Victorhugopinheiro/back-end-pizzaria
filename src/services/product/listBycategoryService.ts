import prismaClient from "../../prisma"



class ListBycategoryService{

    async execute(category_id:string){


        const productsForId = await prismaClient.product.findMany({
            where:{
                category_id:category_id
            }
        })

        return (productsForId)
    }
}


export {ListBycategoryService}