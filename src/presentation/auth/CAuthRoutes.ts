import {Router,Request,Response} from "express";
import {CAuthControllers} from "./CAuthControllers";
import {CAuthDatasourceMongoImpl} from "../../infrastructure/datasources/CAuthDatasourceMongoImpl";
import {CAuthRepositoryImpl} from "../../infrastructure/repository/CAuthRepositoryImpl";

export class CAuthRoutes{

    static get routes():Router{

        const datasource = new CAuthDatasourceMongoImpl();
        const authRepository = new CAuthRepositoryImpl(datasource);
        const controllers = new CAuthControllers(authRepository);
        const route = Router();

        route.post('/login',controllers.login);
        route.post('/register',controllers.register);
        route.post('/getuser',controllers.getuser);
        route.get('/getusers',controllers.getusers);

        return route;
    }
}