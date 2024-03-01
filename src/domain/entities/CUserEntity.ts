
export class CUserEntity{
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public password:string,
        public rol:string[],
        public img?:string,

    ) {
    }
}

//Debe ser similar como es en la tabla User
