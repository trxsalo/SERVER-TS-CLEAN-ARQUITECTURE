import {userModel} from '../../data/'
import {CAuthDatasource, CLoginDto, CRegisterUserDto, CUserEntity} from "../../domain";
import {CError} from "../../config";
import {CTraslate, LANGUAGES} from "../../language/CTraslate";

import {GlobalVariables} from "../../config";

export class CAuthDatasourceMongoImpl implements CAuthDatasource {

    private  readonly lng = GlobalVariables.lang;
    async login(login: CLoginDto): Promise<CUserEntity> {
        const {password,email}:CLoginDto = login
        try {
            //Verficar si exite el usario
            //Vericar passsword
            //Asignarle un token?

            if(password != '123444')  throw CError.BadRequest(CTraslate.Translate(this.lng,'ErrorPassword'))

            return  new CUserEntity(
                1,
                "Marcos Salomon",
                "222221ssf",
                'ssss',
                ['00000','0001'],
                "marcos@loras.trx"
            )
        }catch (e){
            if(e instanceof CError) throw e;
            throw CError.InternalServerError();
        }

    }
     async register(register: CRegisterUserDto): Promise<CUserEntity> {

        const {name,password,email }: CRegisterUserDto = register;
        try {
            const exists = await userModel.findOne({email: email});
            if(exists)throw CError.BadRequest('Mail Exists');
            //todo: hash pasword

            //Creando usuarios
            const user = new userModel({
                name,
                email,
                password
            });
            const savedUser = await user.save();
            //Todo: Mappear la respuestas
             return  new CUserEntity(
                 user.id,
                 user.name,
                 user.email,
                 user.password,
                 user.roles
            );
        }catch (e){
            if(e instanceof CError) throw e;
            throw CError.InternalServerError();
        }

    }

}