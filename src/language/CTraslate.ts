
import {langEn} from './language-en'
import {langEs} from "./languaje-es-mx";

interface Languajes{
    "ES":{[key:string]:string},
    "ENG":{[key:string]:string}
}

const traslation:Languajes= {
    'ES' : langEs, //Castellano
    'ENG': langEn //Ingles
}

//IDIOMAS QUE TIENE SOPORTE
export type LANGUAGES  = 'ES' | 'ENG' ;

export class CTraslate{

    static readonly languages:Languajes = traslation;
    static traslate(lang:LANGUAGES,key:string):string{
        //VERIFICAMOS SI ES EL IDIOMA ESTA DISPONIBLE
        if (this.languages[lang]) {
            return this.languages[lang][key];
        } else {
            throw new Error(`Language not supported: ${lang}`);
        }
    }
}