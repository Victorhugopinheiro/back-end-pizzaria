import prismaClient from "../../prisma";


class ShowCategoryService {

    async execute(){

        const showCategory = await prismaClient.category.findMany({
            select:{
                id:true,
                name:true
            }
        })

        return(showCategory)
    }
}

export {ShowCategoryService}