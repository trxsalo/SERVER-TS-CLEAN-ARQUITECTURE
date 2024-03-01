
// EN ESTA CLASE ESTARE MANIPULADO VARIBLES GLOBALES
// LOS CUALES SUS DATOS CAMBIARIAN DINAMICAMENTE DEPENDIENDO DEL USUARIO
// U OTROS CASOS
import {CTraslate, LANGUAGES} from "../language/CTraslate";


export  class  GlobalVariables{
    private static _lang: LANGUAGES = 'ES';
    static get lang(): LANGUAGES {
        return this._lang;
    }

    static set lang(value: any) {
        if (CTraslate.verifier(value)) {
            this._lang = value;
        } else {
            throw new Error('Invalid language code');
        }
    }

}