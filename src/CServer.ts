import express from 'express';


interface Options {
    port?:number
}
export class CServer{

    public readonly app = express();
    private readonly port:number;
    constructor(options:Options) {
        const {port=3100} = options;
        this.port = port;
    }

     async  start(){
        this.app.listen(3000,()=>{
            console.log('Port en 3000');
        })
    }

}