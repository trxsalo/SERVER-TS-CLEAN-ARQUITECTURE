import {Request, Response} from "express";
import {CAuthRepositori, CRegisterUserDto, CRegisterUserUseCaseImp, CUserEntity} from "../../domain";
import {CError, CJwtAdapter} from "../../config";
import {userModel} from "../../data";
import {CUserMappers} from "../../infrastructure/mappers/CUserMappers";
import {CErrorResponse} from "../../config/CErrorResponse";

export class CAuthControllers {

    constructor(
        private readonly authRepository: CAuthRepositori,
    ) {}



    login = (req:Request,res:Response)=> {
        const body = req.body
        console.log(body)
        return res.status(200).json(body);
    }
    register = async (req:Request,res:Response)=>{
        try {
            const body = req.body
            const [error,user] = CRegisterUserDto.createUser(body);
            if (error) res.status(400).json(error);

            const Register:CRegisterUserUseCaseImp = new CRegisterUserUseCaseImp(this.authRepository);
            const newRegister = await Register.execute(user!)

            return res.status(201).json(newRegister);

        }catch(err){
            return CErrorResponse.handleError(err, res)
        }

    }

    getuser = async (req:Request,res:Response)=>{
        try {
            const {id} = req.body
            const user = await userModel.findById(id);
            if(!user) throw CError.BadRequest('User not found');
            console.log(user);
            const userEntity = CUserMappers.userEntityFromObject(user);
            return res.status(200).json({userEntity});

        }catch(err){
            return CErrorResponse.handleError(err, res);
        }

    }

    getusers = async (req:Request,res:Response)=>{
        try {
            const user = await userModel.find();
            if(!user) throw CError.BadRequest('Users not found');
            return res.status(200).json({user,token:req.body.payload});

        }catch(err){
            return CErrorResponse.handleError(err, res);
        }

    }
}

//En lo controladore se recomida usar un clase para realizar la logica de los casos de usos,
// y no se recomienda realizar la logica en el mismo controlador(recomendaciones de arquictectura limpia)
