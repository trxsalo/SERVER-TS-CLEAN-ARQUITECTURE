import {CGetUserDto, CUserEntity, CUserShowEntity} from '../index'

export abstract class CUserDatasource{
    abstract getUser(user:CGetUserDto):Promise<CUserShowEntity>;
    abstract getUsers():Promise<CUserShowEntity[]>;
}