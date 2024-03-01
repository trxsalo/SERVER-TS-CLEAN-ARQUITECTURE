/**
 *  En los dtos, solo se especifica los campos con lo que utilizara, solo esos.
 */
import {CValidators} from "../../config";


export class CRegisterUserDto {
        private constructor(
           public name:string,
           public email:string,
           public password:string,
        ) {}

    static createUser(json:{[key:string]:any}):[string?,CRegisterUserDto?]{
       const {name,email,password} = json;
       if(!name) return [ 'Missing name'];
       if(!email) return [ 'Missing email'];
       if(!password) return [ 'Missing password'];
       if(!CValidators.email.test(email)) return ["Email is not valid"]
       if(!CValidators.user.test(name)) return ["Name is not valid expression characters greater than 10 and max. 20"]
       if(!CValidators.password.test(password)) return ["Password is not a valid expression, characters greater than 4 and max. 16."]


       return [
           undefined,
           new CRegisterUserDto(
               name,
               email.toLowerCase(),
               password
           )
       ];
    }
}