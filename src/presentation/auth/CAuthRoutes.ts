import {Router} from "express";
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

        return route;
    }
}