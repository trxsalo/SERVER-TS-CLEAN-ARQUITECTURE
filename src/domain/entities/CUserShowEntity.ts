
//los datos que queremos solo mostrar
export class CUserShowEntity {
    constructor(
        public name:string,
        public email:string,
        public rol:string[],
        public img?:string,

    ) {
    }
}