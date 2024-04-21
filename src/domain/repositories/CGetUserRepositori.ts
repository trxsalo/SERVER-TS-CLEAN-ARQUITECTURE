import {CGetUserDto, CUserShowEntity} from '../index'


export abstract class CGetUserRepositori{
    abstract getUser(user:CGetUserDto):Promise<CUserShowEntity>;
    abstract getUsers():Promise<CUserShowEntity[]>;
}