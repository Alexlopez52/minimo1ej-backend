import express from 'express';
import mongoose from 'mongoose';
import SubjectRoutes from './routes/SubjectRoutes';
import StudentRoutes from './routes/StudentRoutes';
import cors = require("cors");

class Server{
    public app: express.Application; //primero dices que app es de tipo express

    constructor(){//lo primero que se ejecuta
        this.app =express();//guarda propiedad app de express
        this.config(); //inicializas la configuracion
        this.routes();
    }

    config(){
        this.app.use(cors());
        //Port set
        this.app.set('port',process.env.PORT || 3000);//determinas el port
        //Mongoose
        const MONGO_URI='mongodb://localhost:27017/minimo1ejemplo'; //cualquier nombre
        mongoose.set('useFindAndModify',true);//siempre
        console.log(process.env.MONGODB_URL);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL,{ //config mongoose
            useNewUrlParser: true,//siempre
            useCreateIndex: true, //siempre
            useUnifiedTopology: true //SIEMPRE

        }) .then(db=>console.log('DB is connected')); //una vez conectes muestra log
        //Usos
        this.app.use(express.json());//para entender formatos json
        this.app.use(express.urlencoded({extended:false}))//por si acaso envio formularis
       
    }

    routes(){
        
        this.app.use('/api/subject',SubjectRoutes); //para que todas tengan /api antes
        this.app.use('/api/student',StudentRoutes);
    }

    start(){
        this.app.listen(this.app.get('port')) ;//pillas el port
        console.log('server on port ',this.app.get('port'));
    }
}

const server = new Server();
server.start(); //ejecutas la funcion start

