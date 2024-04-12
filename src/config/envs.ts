import 'dotenv/config';
import {get} from 'env-var';

export const envs ={
    PORT : get('PORT').required().asPortNumber(),
    MONGO_URL : get('MONGO_URL').required().asString(),
    MONGO_DBNAME : get('MONGO_DBNAME').required().asString(),
    JWT_SEMILLA : get('JWT_SEMILLA').required().asString(),
}

