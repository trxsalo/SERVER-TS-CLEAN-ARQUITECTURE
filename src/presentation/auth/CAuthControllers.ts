import {Request, Response} from "express";
import {CAuthRepositori, CRegisterUserDto, CUserEntity} from "../../domain";
import {CError, CJwtAdapter} from "../../config";
import {userModel} from "../../data";
import {CUserMappers} from "../../infrastructure/mappers/CUserMappers";

export class CAuthControllers {

    constructor(
        private readonly authRepository: CAuthRepositori,
    ) {}

    private handleError = (error:unknown, res:Response)=>{
        if(error instanceof CError){
            return res.status(error.statusCode).send({error:error.message});
        }
        console.log({
            error
        });

        return  res.status(500).json({error:"Internal Server Error"});
    }

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
            const register:CUserEntity  = await this.authRepository.register(user!);
            return  res.status(200).json({
                user:register,
                token:{
                    payload: await CJwtAdapter.genereteToken({
                        _payload:{
                            user:register.email,
                            id:register.id,
                            name:register.name,
                        },
                        _duration:'2h'
                    }),
                }
            });

        }catch(err){
            return this.handleError(err, res)
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
            return this.handleError(err, res);
        }

    }

    getusers = async (req:Request,res:Response)=>{
        try {
            const {id} = req.body
            const user = await userModel.find();
            if(!user) throw CError.BadRequest('Users not found');
            return res.status(200).json({user});

        }catch(err){
            return this.handleError(err, res);
        }

    }
}

//En lo controladore se recomida usar un clase para realizar la logica de los casos de usos,
// y no se recomienda realizar la logica en el mismo controlador(recomendaciones de arquictectura limpia)
