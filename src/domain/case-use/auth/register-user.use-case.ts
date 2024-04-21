import {CRegisterUserDto} from "../../dtos/auth/CRegisterUserDto";
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

interface RegisterUserUseCase {
    execute(registerDto:CRegisterUserDto):Promise<token>;
}

export class CRegisterUserUseCaseImp implements RegisterUserUseCase {

    constructor(
        private readonly authRepository: CAuthRepositori,
        private readonly singToken:signtoken = CJwtAdapter.genereteToken
    ) {
    }

    async  execute(registerDto: CRegisterUserDto): Promise<token> {

        //Creamos el usuario
        const user = await this.authRepository.register(registerDto);
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
