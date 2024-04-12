import {CAuthDatasource, CAuthRepositori, CLoginDto, CRegisterUserDto, CUserEntity} from "../../domain";


export class CAuthRepositoryImpl implements CAuthRepositori{
    constructor(
        private readonly authDatasource: CAuthDatasource,//La base de datos
    ) {}
    register(register: CRegisterUserDto): Promise<CUserEntity> {
        return this.authDatasource.register(register);
    }
    login(login: CLoginDto): Promise<CUserEntity> {
        return this.authDatasource.login(login);
    }
}