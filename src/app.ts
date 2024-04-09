import {envs} from './config/index';
import {CServer} from "./presentation/CServer";
import {CRoutes} from "./presentation/CRoutes";
import {CMongooseDatabase} from "./data";
async function main (){
    await   CMongooseDatabase.connect({
        mongourl:envs.MONGO_URL,
        dbName:envs.MONGO_DBNAME
    })
    await new CServer({
        port:envs.PORT, //El puerto a usar
        route:CRoutes.route //Enviamos la rutas
    }).start();
}



main();