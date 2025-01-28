import express, {Request, Response, NextFunction} from "express";
import "express-async-errors"
import cors from "cors"
import { router } from "./routes";
import path from "path"
import fileUpload from "express-fileupload";




const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload({
    limits:{fileSize: 50 * 1024 * 1024}
}))
app.use(router)


//url statica para acessar a imagem
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)





app.use((err:Error, req:Request, res:Response, next:NextFunction) => {

    if(err instanceof Error){
        res.status(400).json({
            error: err.message
        })
    }

    res.status(500).json({
        status:"error",
        message:"internal erro server"
    })

})

app.listen(process.env.PORT, () => {"servidor iniciado"})



