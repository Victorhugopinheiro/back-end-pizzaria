import prismaClient from "../../prisma";


class RemoveITemService{

    async execute(item_id:string){

        const removeItem_id = await prismaClient.item.delete({
            where:{
                id: item_id
            }
        })


        return (removeItem_id)
    }
}


export {RemoveITemService}