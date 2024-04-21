import {userModel} from '../../data/'
import {CAuthDatasource, CLoginDto, CRegisterUserDto, CUserEntity} from "../../domain";
import {BcryptAdapter, CError, GlobalVariables} from "../../config";
import {CUserMappers} from "../index";

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;


export class CAuthDatasourceMongoImpl implements CAuthDatasource {

    private  readonly lng = GlobalVariables.lang;


    constructor(
        private readonly hashPassword:HashFunction = BcryptAdapter.hash,
        private readonly comparePassword:CompareFunction = BcryptAdapter.compare,
    ) {}


    async login(login: CLoginDto): Promise<CUserEntity> {
        const {password,email}:CLoginDto = login
        try {
            //Verficar si exite el usario
            const user = await userModel.findOne({ email });//buscamos usario por correo
            if(!user) throw CError.BadRequest('User is not correct');
            //Vericar passsword
            const isMatching = this.comparePassword(password, user.password);
            if ( !isMatching ) throw CError.BadRequest('Password is not valid');

            //Mapeamos el resultado, y los devolvemos
            return CUserMappers.userEntityFromObject(user);

        }catch (e){
            if(e instanceof CError) throw e;
            throw CError.InternalServerError();
        }

    }
    async register(register: CRegisterUserDto): Promise<CUserEntity> {
        const {name,password,email }: CRegisterUserDto = register;
        try {
            const exists = await userModel.findOne({email: email});
            if(exists) throw CError.BadRequest('Mail Exists');

            //Creando usuarios
            const user = new userModel({
                name,
                email,
                password:this.hashPassword(password)
            });
            const savedUser = await user.save();

            const saveU =  CUserMappers.userEntityFromObject(savedUser);
            console.log(saveU);

            return saveU;

        }catch (e){
            if(e instanceof CError) throw e;
            throw CError.InternalServerError();
        }

    }
}
