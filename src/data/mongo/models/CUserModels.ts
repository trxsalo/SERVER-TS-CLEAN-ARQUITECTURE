import mongoose,{Schema} from "mongoose";

const userShema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique: true //que sea unico
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },
    img:{
        type:String,
        default:NaN
    },
    roles:{
        type:[String],
        default:['USER_ROLE'],
        enum:['USER_ROLE','ADMIN_ROLE','VISITA_ROLE']
    },

})

export const userModel = mongoose.model('User',userShema);