import {Router,Request,Response,NextFunction} from "express";
import {CAuthControllers} from "./CAuthControllers";
import {CAuthDatasourceMongoImpl} from "../../infrastructure/datasources/CAuthDatasourceMongoImpl";
import {CAuthRepositoryImpl} from "../../infrastructure/repository/CAuthRepositoryImpl";
import {CAuthMiddleWare} from "../middlewares/CAuthMidd";

export class CAuthRoutes{

    static get routes():Router{

        const datasource = new CAuthDatasourceMongoImpl();
        const authRepository = new CAuthRepositoryImpl(datasource);
        const controllers = new CAuthControllers(authRepository);
        const route = Router();

        route.post('/login',controllers.login);
        route.post('/register',controllers.register);
        route.post('/getuser/',controllers.getuser);
        route.get('/getusers',[CAuthMiddleWare.validateJwt],controllers.getusers);

        return route;
    }
}