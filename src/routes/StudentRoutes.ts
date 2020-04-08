import {Request,Response,Router} from 'express';
import Student from '../models/Student';
class StudentRoutes {
router :Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    async getStudents(req :Request, res:Response){
       const students= await Student.find();
       res.json(students);

    }
    
    async createStudent(req :Request, res:Response){
      
        const newStudent = new Student(req.body)
        await newStudent.save();
        res.json({data: newStudent});

    }
    
    async deleteStudent(req :Request, res:Response){

        const {name} = req.params;
        await Student.findOneAndDelete({name})//busca url que coincida
    
        res.json("ok")
    }

    routes(){
        this.router.get('/todos',this.getStudents);
        this.router.post('/todos',this.createStudent);
        this.router.delete('/todos/:name',this.deleteStudent);
        
    }
}

const studentRoute = new StudentRoutes();
export default studentRoute.router;