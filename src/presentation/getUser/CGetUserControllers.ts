import  {Request, Response} from "express";
import { CGetUserDto,
        CGetUserRepositori,
        } from "../../domain";
import {CErrorResponse} from "../../config";




export class CGetUserControllers {

    constructor(
        private readonly getUserRepository:CGetUserRepositori
    ) {}
     getUsers = async (req: Request, res: Response)=> {
        try {
            const data = await this.getUserRepository.getUsers();
            res.status(200).json(data);
        }catch(e) {
            return CErrorResponse.handleError(e, res)
        }
    }

    getUser = async (req: Request, res: Response) =>{
        try {
            const {id} = req.params;
            const [error,user] =  CGetUserDto.userGet(id);
            if(error) {
                res.status(400).json(error)
            }else{
                const data = await this.getUserRepository.getUser(user!);
                return res.status(200).json(data);
            }
        }
        catch (e){
            return CErrorResponse.handleError(e, res)
        }
    }
}

