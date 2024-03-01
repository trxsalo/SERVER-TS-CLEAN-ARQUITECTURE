
// EN ESTA CLASE ESTARE MANIPULADO VARIBLES GLOBALES
// LOS CUALES SUS DATOS CAMBIARIAN DINAMICAMENTE DEPENDIENDO DEL USUARIO
// U OTROS CASOS
import {LANGUAGES} from "../language/CTraslate";


export  class  GlobalVariables{
    public static lang: LANGUAGES = 'ES';

    static  Getlang():LANGUAGES{
        return this.lang
    }
    static  Setlang(lng:any){
        const l:LANGUAGES = lng;
        this.lang = l;
    }
}