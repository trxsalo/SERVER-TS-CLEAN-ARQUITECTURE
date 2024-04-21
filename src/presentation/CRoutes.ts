
import {Router,Request,Response} from "express";
import {CAuthRoutes} from "./auth/CAuthRoutes";
import {CGetUserRoute} from "./getUser/CGetUserRoute";
import {CAuthMiddleWare} from "./middlewares/CAuthMidd";

export class CRoutes{

    static get route():Router{
        const route:Router =Router();
        route.use('/api/auth', CAuthRoutes.routes);
        route.use('/api/get', [CAuthMiddleWare.validateJwt],CGetUserRoute.routes);
        return  route;
    }
}