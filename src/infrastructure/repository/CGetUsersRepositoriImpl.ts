import {CGetUserDto, CGetUserRepositori, CUserDatasource, CUserShowEntity} from "../../domain";


export class CGetUsersRepositoriImpl implements CGetUserRepositori{

   constructor(
       private readonly getuserDatasourse:CUserDatasource
   ) {
   }
    async getUser(user: CGetUserDto): Promise<CUserShowEntity> {
        return await this.getuserDatasourse.getUser(user);
    }
    async getUsers(): Promise<CUserShowEntity[]> {
        return await this.getuserDatasourse.getUsers();
    }
}