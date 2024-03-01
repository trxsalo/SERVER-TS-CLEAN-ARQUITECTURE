
import {langEn} from './language-en'
import {langEs} from "./languaje-es-mx";
import {Verify} from "node:crypto";
import {throws} from "node:assert";
import {CError} from "../config";

interface Languajes{
    ES:{[key:string]:string},
    ENG:{[key:string]:string}
}

const traslation:Languajes= {
    ES : langEs, //Castellano
    ENG: langEn //Ingles
}

//IDIOMAS QUE TIENE SOPORTE
export type LANGUAGES  = 'ES' | 'ENG' ;
export const LNGS:string[] = ['ES','ENG'];


export class CTraslate{

    static readonly languages:Languajes = traslation;
    static Translate(lang:LANGUAGES,key:string):string{

        if (this.verifier(lang)) {
            const res = this.languages[lang][key];
            if ( res === undefined){
                throw new Error(`Translate not supported: ${key}`);

            }else {
                return  res;
            }



        } else {
            throw new Error(`Language not supported: ${lang}`);
        }
    }

    static verifier(lng:string):boolean{
           return  (LNGS.includes(lng.toString()));
    }
}