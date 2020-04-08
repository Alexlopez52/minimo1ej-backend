import {Schema,model} from 'mongoose';

const StudentSchema = new Schema({
    name:{type: String, required:true},
    address:{type:String,required:true},
    phones: [{
        telname:String,
        telnumber:String
    }]
})

export default model('Student',StudentSchema);