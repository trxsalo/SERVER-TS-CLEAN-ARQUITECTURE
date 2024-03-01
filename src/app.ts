import {envs} from './config/index';
import {CServer} from "./presentation/CServer";
import {CRoutes} from "./presentation/CRoutes";
async function main (){
    // console.log('Da')
    await new CServer({
        port:envs.PORT, //El puerto a usar
        route:CRoutes.route //Enviamos la rutas
    }).start();
}



main();