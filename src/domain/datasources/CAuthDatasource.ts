import {CRegisterUserDto,CUserEntity,CLoginDto} from '../index'

//Datasourse rige las reglas del negocio,
export abstract class CAuthDatasource{

    abstract login(login:CLoginDto):Promise<CUserEntity>
    
    abstract register(register: CRegisterUserDto):Promise<any>
}