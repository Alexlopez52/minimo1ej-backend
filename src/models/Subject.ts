import {Schema,model} from 'mongoose';
import Student from './Student';
const SubjectSchema = new Schema({
    name:{type: String, required:true},
    students:[{
        type:Schema.Types.ObjectId,
        ref:Student

    }]
})

export default model('Subject',SubjectSchema);