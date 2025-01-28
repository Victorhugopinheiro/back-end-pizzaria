import prismaClient from "../../prisma"

interface Category{
    name:string
}

class createCategoryService {
    async execute({name}:Category){
    
        if(!name){
            throw new Error("invalid category name")
        }

        const category = await prismaClient.category.create({
            data:{
                name:name
            },
            select:{
                name:true,
                id:true,
            }
        })

        return {category}


    }
}

export{
    createCategoryService
}