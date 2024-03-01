import {CAuthDatasource, CLoginDto, CRegisterUserDto, CUserEntity} from "../../domain";
import {CError} from "../../config";

export class CAuthDatasourceMongoImpl implements CAuthDatasource {
    async login(login: CLoginDto): Promise<CUserEntity> {
        const {password,email}:CLoginDto = login
        try {
            //Verficar si exite el usario
            //Vericar passsword
            //Asignarle un token?



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
            //1 Verificar correo
            if(email == 'marcos@gmail.com') throw CError.BadRequest('Correo Ya exitente')
            //2 hash pasword
            //3 mapear res

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

}