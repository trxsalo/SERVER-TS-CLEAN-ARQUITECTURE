import * as mongoose from "mongoose";

interface options  {
    mongourl:string,
    dbName:string,
}

export class CMongooseDatabase {
    static async connect(obj:options){
        const {dbName,mongourl} = obj;
        try {
            await mongoose.connect(mongourl,{
                dbName:dbName,
            });
            console.log('Connection database ok');
        }catch (e) {
            console.log('error connection database',e);
            throw new Error('Conection Error Database')
        }
    }
}