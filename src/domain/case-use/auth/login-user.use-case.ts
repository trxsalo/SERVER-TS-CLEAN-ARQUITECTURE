
import {CLoginDto} from "../../dtos/auth/CLoginDto";
import {CAuthRepositori} from "../../repositories/CAuthRepositori";
import {CError, CJwtAdapter} from "../../../config";

interface ICJwtAdapter {
    _payload:Object,
    _duration:string
}

type signtoken  = ({_payload, _duration}: ICJwtAdapter)=>Promise<string | null>

interface token {
    token:string,
    user:{
        id:string
    }
}

interface LoginUserCase {
    execute(registerDto:CLoginDto):Promise<token>;
}

export class CLoginUserCaseImpl implements LoginUserCase {

    constructor(
        private readonly authRepository: CAuthRepositori,
        private readonly singToken:signtoken = CJwtAdapter.genereteToken
    ) {
    }

    async  execute(login_data: CLoginDto): Promise<token> {

        //buscamos el usaurio
        const user = await this.authRepository.login(login_data);
        //Creamos el token
        const jwt = await this.singToken({_payload:{id:user.id},_duration:'2h'})
        if(!jwt) throw CError.InternalServerError('Error generating Token')

        return {
            token:jwt,
            user:{
                id:user.id,
            }
        }
    }
};