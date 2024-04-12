import {CUserEntity} from "../../domain";
import {CError} from "../../config";


export class CUserMappers {
    static userEntityFromObject(objecto:{[key:string]:any}):CUserEntity {
        const {_id,id,name,email,password,roles,img} = objecto;
        if(!_id || !id) throw CError.BadRequest('Missing ID');
        if(!name) throw CError.BadRequest('Missing name');
        if(!email) throw CError.BadRequest('Missing email');
        if(!password) throw CError.BadRequest('Missing password');
        if(!roles) throw CError.BadRequest('Missing roles');

        return new CUserEntity(
            _id||id,
            name,
            email,
            password,
            roles,
            img);
    }

}