import {Response} from "express";
import {CError} from "./CError";

export class CErrorResponse {
    static handleError = (error:unknown, res:Response)=>{
        if(error instanceof CError){
            return res.status(error.statusCode).send({error:error.message});
        }
        console.log({
            error
        });

        return  res.status(500).json({error:"Internal Server Error"});
    }
}