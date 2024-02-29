import {CServer} from "./CServer";
import {envs} from './config/index';
async function main (){
    // console.log('Da')
    await new CServer({
        port:envs.PORT,
    }).start();
}

main();