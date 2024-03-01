import {Router,Request,Response} from "express";
import {CAuthRoutes} from "./auth/CAuthRoutes";

export class CRoutes{

    static get route():Router{
        const route:Router =Router()
        route.use('/api/auth',CAuthRoutes.routes );
        return  route;
    }
}