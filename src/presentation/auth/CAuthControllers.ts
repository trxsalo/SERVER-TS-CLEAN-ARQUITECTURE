import {Request,Response} from "express";
import {CRegisterUserDto} from "../../domain";

export class CAuthControllers {

    constructor() {
    }
    login = (req:Request,res:Response)=> {
        const body = req.body
        console.log(body)
        return res.status(200).json(body);
    }
    register = (req:Request,res:Response)=>{
        const body = req.body

        const [error,user] = CRegisterUserDto.createUser(body);
        if (error) res.status(400).json(error);

        return  res.status(200).json(user);

    }

    user = (req:Request,res:Response)=>{
        console.log(req.body)
        return res.status(200).json(req.body);
    }
}

//En lo controladore se recomida usar un clase para realizar la logica de los casos de usos,
// y no se recomienda realizar la logica en el mismo controlador(recomendaciones de arquictectura limpia)
