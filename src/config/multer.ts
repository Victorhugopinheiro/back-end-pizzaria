import multer from "multer";
import crypto from "crypto"

import { extname, resolve } from "path";

export default{
    upload(folder:string){
        return{
            storage: multer.diskStorage({
                //para onde vão as fotos
                destination: resolve(__dirname, "..", "..", folder),

                
                filename: (request, file, callback) => {

                        //para não repetir o nome da foto
                        const fileHash = crypto.randomBytes(16).toString("hex")
                        const fileName = `${fileHash}-${file.originalname}`

                        //NULL É O ERRO E FILE NAME O NOME DO ARQUIVO
                        return callback(null, fileName)
                }
            })
        }

    }
}