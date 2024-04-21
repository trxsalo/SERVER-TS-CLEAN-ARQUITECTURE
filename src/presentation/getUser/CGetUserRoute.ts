import {Router} from "express";
import {CGetUserDatasourceImplMongo, CGetUsersRepositoriImpl} from '../../infrastructure'
import {CGetUserControllers} from "./CGetUserControllers";


export class CGetUserRoute{

    static get routes():Router{

        const route = Router();

        const datasource = new CGetUserDatasourceImplMongo();
        const getUserRepository = new CGetUsersRepositoriImpl(datasource);
        const controllers = new CGetUserControllers(getUserRepository);

        route.get('/users',controllers.getUsers);
        route.get('/user/:id',controllers.getUser);

        return route;
    }
}