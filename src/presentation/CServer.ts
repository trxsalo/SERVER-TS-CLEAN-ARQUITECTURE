import express, {Router,Application} from 'express';
import morgan from "morgan";


interface Options {
    port?:number,
    route:Router

}
export class CServer{

    public readonly app:Application =express();
    private readonly port:number;
    private readonly routes:Router;
    constructor(options:Options) {
        const {port=3100, route} = options;
        this.port = port;
        this.routes = route;
    }
    private middleware(){
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(express.urlencoded({extended:true}));
    }

    private configPort(){
        this.app.set('port',this.port);
    }

    /**
     * Escuchamos por el puerto que configuramos
     */
    private listen (){
        this.app.listen(this.app.get("port"));
        console.log("Servidor escuchando en el puerto:", this.app.get("port"));
    }

     route(){
        this.app.use(this.routes);
    }
     async  start(){
        /// Primero se inicializa los middleware, luego el port , las ruta y por utilmo levantamos el servicio

         //Los middleware
         this.middleware();
        //Configuramos el puerto
         this.configPort();
         //Usamos las rutas que definimos en CRoutes
         this.route();
         //Levantamos el port
         this.listen();

    }

}