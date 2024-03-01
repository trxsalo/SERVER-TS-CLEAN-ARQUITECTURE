

export class CError extends  Error{
    constructor(
        public readonly statusCode:number,
        public readonly message:string) {
        super(message);

    }

    static BadRequest(message = 'Bad Request'):CError{
        return new CError(400,message);
    }
    static NotAuthorized():CError{
        return new CError(401,'Not Authorized');
    }

    static NotFound():CError{
        return new CError(404,'Not Found');
    }
    static InternalServerError(message:string='Internal Server Error' ):CError{
        return new CError(500,message);
    }



}