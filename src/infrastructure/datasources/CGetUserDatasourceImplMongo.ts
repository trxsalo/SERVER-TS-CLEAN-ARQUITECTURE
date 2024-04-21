import {CGetUserDto, CUserDatasource, CUserShowEntity} from "../../domain";
import {userModel} from "../../data";
import {CError} from "../../config";
import {CUserShowMappers} from "../mappers/CUserShowMappers";


export class CGetUserDatasourceImplMongo implements CUserDatasource{

        async getUser(user: CGetUserDto): Promise<CUserShowEntity> {
            try {
                const data = await userModel.findById(user.id);
                if (!data){
                    throw CError.BadRequest('User not found')
                }else{
                    return  CUserShowMappers.userEntityFromObject(data!);
                }
            }
            catch (e){
                if(e instanceof CError) throw e;
                throw CError.InternalServerError();
            }
        }
        async getUsers(): Promise<CUserShowEntity[]> {
           try {
               const data = await userModel.find();
               // Mapear los datos de usuario a un nuevo formato usando el mapeador
               const users =  data.map(user => {
                   return CUserShowMappers.userEntityFromObject(user);
               });
               return  users;
           }
           catch (e){
               if(e instanceof CError) throw e;
               throw CError.InternalServerError();
           }
        }
}