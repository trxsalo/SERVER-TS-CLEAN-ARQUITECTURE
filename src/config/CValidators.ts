
export class CValidators{

    private static emailRegex:RegExp =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    private static userRegex:RegExp = /^[a-zA-Z0-9\_\-]{10,20}$/;
    private static passswordRegex:RegExp =  /^.{4,12}$/;

    static  get email(){
        return this.emailRegex;
    }
    static  get user(){
        return this.userRegex;
    }
    static  get password(){
        return this.passswordRegex;
    }
}