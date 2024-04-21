
import {Request, Response} from "express";
import {CErrorResponse} from "../../config/";
import {CAuthRepositori,
        CLoginDto,
        CRegisterUserDto,
        CRegisterUserUseCaseImp,
        CLoginUserCaseImpl} from "../../domain";



export class CAuthControllers {

    constructor(
        private readonly authRepository: CAuthRepositori,
    ) {}



    login = async (req:Request,res:Response)=> {
        const body = req.body
        try {
            const [error,user] = CLoginDto.loginuser(body);
            if (error){
                res.status(400).json(error)
            }else{
                const login  = new CLoginUserCaseImpl(this.authRepository );
                const newLogin = await login.execute(user!);
                return res.status(200).json(newLogin);
            }
        }
        catch(err){
            return CErrorResponse.handleError(err, res)
        }

    }
    register = async (req:Request,res:Response)=>{
        try {
            const body = req.body
            const [error,user] = CRegisterUserDto.createUser(body);
            if (error){
                res.status(400).json(error)
            }else{
                const Register:CRegisterUserUseCaseImp = new CRegisterUserUseCaseImp(this.authRepository);
                const newRegister = await Register.execute(user!)
                return res.status(201).json(newRegister);
            }

        }catch(err){
            return CErrorResponse.handleError(err, res)
        }

    }

}

//En lo controladore se recomida usar un clase para realizar la logica de los casos de usos,
// y no se recomienda realizar la logica en el mismo controlador(recomendaciones de arquictectura limpia)
