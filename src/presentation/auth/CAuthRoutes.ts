import {Router,Request,Response} from "express";
import {CAuthControllers} from "./CAuthControllers";

export class CAuthRoutes{

    static get routes():Router{
        const controllers = new CAuthControllers();
        const route = Router();

        route.post('/login',controllers.login);
        route.post('/register',controllers.register);
        route.get('/user',controllers.user);

        return route;
    }
}