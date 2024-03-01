
import {Router,Request,Response} from "express";
import {CAuthRoutes} from "./auth/CAuthRoutes";
import {GlobalVariables} from '../config/GlobalVariables';
export class CRoutes{

    static get route():Router{
        const route:Router =Router()
        route.use('/:lang/api/auth', (req:Request,res:Response)=>{
            const lng:string  = req.params.lang.toString().toUpperCase();
            GlobalVariables.lang = lng;
            CAuthRoutes.routes
        });
        return  route;
    }
}