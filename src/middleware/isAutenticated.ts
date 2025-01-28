import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub:string
}


export function MiddlewareAuth(req:Request, res:Response, next:NextFunction){

    const authToken = req.headers.authorization
    
    if(!authToken){
        res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    console.log(token)

   try{

    const { sub } = verify(
        token,
        process.env.JWT_SECRET
    )as PayLoad

    console.log(sub)


    req.user_id = sub 
    
    return next()

   }catch(err){
    res.status(401).end()
   }

    
}

