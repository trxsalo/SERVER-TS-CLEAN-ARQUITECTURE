import jwt from 'jsonwebtoken';
import {envs} from "./envs";

interface ICJwtAdapter {
    _payload:Object,
    _duration:string
}

export class CJwtAdapter {

    static async genereteToken({_payload,_duration}: ICJwtAdapter):Promise<string|null> {
        return new Promise((resolve) => {
            // @ts-ignore
            jwt.sign(
                _payload,
                envs.JWT_SEMILLA,
                { expiresIn: _duration },
                (err:null, token:string) => {
                    if (err) resolve(err);
                    resolve(token!);
                }
            );
        });

    }
}