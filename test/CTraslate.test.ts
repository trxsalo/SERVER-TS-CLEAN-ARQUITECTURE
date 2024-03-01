import {describe,it,expect} from "vitest";
import {CTraslate} from '../src/language/CTraslate'
describe('CProtypes',()=>{
    it('should define Ctraslation',()=>{
        expect(typeof CTraslate).toBe('function');
    });

    it("should get traslate lang:ES key:ErrorEmail property to string ",()=>{
        expect(CTraslate.Translate('ES','ErrorEmail')).toBeTypeOf('string');
    });

    // it("should get traslate lang:ES key:UNDEFINE property to undefined ",()=>{
    //     expect(CTraslate.Translate('ES','UNDEFINE')).toBeUndefined();
    // });


    it("should error tralate lang:MEA| UNDEFINED  key:Errss | undefined | null " ,()=>{
        expect(()=>{
            CTraslate.Translate('ES','MESSAGEERROR')
        }).toThrowError();
    })
});