import {NextFunction,Response,Request} from "express";
import {CError, CJwtAdapter} from "../../config";
import {CErrorResponse} from "../../config/CErrorResponse";

export class CAuthMiddleWare{

    static async validateJwt (req:Request,res:Response,next:NextFunction){

        const authorization = req.headers.authorization;

        console.log(authorization);

        if(!authorization)res.status(401).send('Not token provided');
        if(!authorization?.startsWith('Bearer'))res.status(401).send('Invalid Bearer token');

        const token:string = authorization!.split(' ').at(1) || '' as string;
        try {
            const payload =  await CJwtAdapter.validateToken(token);
            console.log(payload);
            if(payload == null) throw CError.BadRequest('Invalid Token provided');
            req.body.payload = payload;
            next();
        }
        catch (err){
            CErrorResponse.handleError(err, res);
        }
    }

}