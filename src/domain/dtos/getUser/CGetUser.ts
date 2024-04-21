/**
 *  En los dtos, solo se especifica los campos con lo que utilizara, solo esos.
 */


export class CGetUserDto {
    private constructor(
        public id:string,
    ) {}

    static userGet(id:string):[string?,CGetUserDto?]{
        if(!id) return ['Require Id'];
        return [
            undefined,
            new CGetUserDto(
                id
            )
        ];
    }
}