import {CUserShowEntity} from "../../domain";
import {CError} from "../../config";


export class CUserShowMappers {
    static userEntityFromObject(objecto:{[key:string]:any}):CUserShowEntity {
        const {name,email,roles,img} = objecto;
        if(!name) throw CError.BadRequest('Missing name');
        if(!email) throw CError.BadRequest('Missing email');
        if(!roles) throw CError.BadRequest('Missing roles');
        return new CUserShowEntity(
            name,
            email,
            roles,
            img
        );
    }

}