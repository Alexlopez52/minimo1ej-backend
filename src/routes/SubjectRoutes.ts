import {Request,Response,Router} from 'express';
import Subject from '../models/Subject';
import Student from '../models/Student'
class SubjectRoutes {
router :Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    async getSubjects(req :Request, res:Response){
       const subjects= await Subject.find();
       res.json(subjects);

    }
    
    async createSubject(req :Request, res:Response){
      
        const newSubject = new Subject(req.body)
        await newSubject.save();
        console.log(newSubject);
        res.json({data: newSubject});

    }
    
    async deleteSubject(req :Request, res:Response){

        const {name} = req.params;
        await Subject.findOneAndDelete({name})//busca url que coincida
    
        res.json("ok")
    }
    async updateSubject(req :Request, res:Response){
        console.log(req.body);
        const studentid = await Student.findOne(req.body,'_id');
        console.log(studentid);
        const {name} = req.params;
        const subject = await Subject.findOneAndUpdate({name},{$push:{students: studentid}},{new: true})//busca url que coincida
        res.json(subject)

    }
    routes(){
        this.router.get('/todos',this.getSubjects);
        this.router.post('/todos',this.createSubject);
        this.router.delete('/todos/:name',this.deleteSubject);
        this.router.put('/todos/:name',this.updateSubject);
    }
}

const subjcetRoute = new SubjectRoutes();
export default subjcetRoute.router;