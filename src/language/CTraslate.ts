
import {langEn} from './language-en'
import {langEs} from "./languaje-es-mx";

interface Languajes{
    ES:{[key:string]:string},
    ENG:{[key:string]:string}
}

const traslation:Languajes= {
    ES : langEs, //Castellano
    ENG: langEn //Ingles
}

type LANG  = 'ES' | 'ENG';

export class CTraslate{
    static  languages:Languajes = traslation;

    static traslate(lang:LANG,key:string):string{
        if (this.languages[lang]) {
            return this.languages[lang][key];
        } else {
            throw new Error(`Language not supported: ${lang}`);
        }
    }
}