/**
 *  En los dtos, solo se especifica los campos con lo que utilizara, solo esos.
 */
import {CValidators} from "../../../config";


export class CLoginDto {
    private constructor(
        public email:string,
        public password:string,
    ) {}

    static loginuser(json:{[key:string]:any}):[string?,CLoginDto?]{
        const {email,password} = json;
        if(!email) return [ 'Missing email'];
        if(!password) return [ 'Missing password'];
        if(!CValidators.password.test(password)) return ["Password is not a valid expression, characters greater than 4 and max. 16."]


        return [
            undefined,
            new CLoginDto(
                email.toLowerCase(),
                password
            )
        ];
    }
}