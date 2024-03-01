import {describe,it,expect} from "vitest";
import {GlobalVariables} from "../src/config";
import {CTraslate} from "../src/language/CTraslate";

describe('CTraslate',()=>{

    it('should define Ctraslation ',()=>{
        expect(typeof CTraslate).toBe('function')
    })
    it('should set default language to "ES" when the class is initialized', () => {
        expect(GlobalVariables.lang).toBe('ES');
    });

    it('should set values language to "ENG" ', () => {
        GlobalVariables.lang = 'ENG';
        expect(GlobalVariables.lang).toBe('ENG');

    });

    it('should throw an error when setting "lang" property to an invalid language code', () => {
        expect(() => {
            GlobalVariables.lang = 'INVALID';
        }).toThrow();
    });

    it('should throw an error when setting "lang" property to null', () => {
        expect(() => {
            GlobalVariables.lang = null;
        }).toThrow();
    });

    it('should throw an error when setting "lang" property to ARG', () => {
        expect(() => {
            GlobalVariables.lang = 'ARG';
        }).toThrow();
    });
});