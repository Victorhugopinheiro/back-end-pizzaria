import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/createProductService";
import {UploadedFile } from "express-fileupload";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})






class CreateProductController {

    async handle(req: Request, res: Response) {
        const {name, category_id, description, price} = req.body
        const functionProduct = new CreateProductService()
        

        if(!req.files){
            throw new Error("Without image")
        }else{
            //const {originalname, filename:banner} = req.file

            const file = req.files['file'] as UploadedFile 

       
          

           console.log(file.data)

           const cloudinaryResponse:UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({} , function (error, result) {
                    if(error){
                        reject(error)
                    }
                    resolve(result)

                }).end(file.data)
           })
          
   
         
            const response = await functionProduct.execute({name, category_id, description, price, banner:cloudinaryResponse.url})
    

           
           
           
    
            res.json({})
        }

        
        
    }
}


export {CreateProductController}