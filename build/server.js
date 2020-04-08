"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var SubjectRoutes_1 = __importDefault(require("./routes/SubjectRoutes"));
var StudentRoutes_1 = __importDefault(require("./routes/StudentRoutes"));
var cors = require("cors");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default(); //guarda propiedad app de express
        this.config(); //inicializas la configuracion
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.use(cors());
        //Port set
        this.app.set('port', process.env.PORT || 3000); //determinas el port
        //Mongoose
        var MONGO_URI = 'mongodb://localhost:27017/minimo1ejemplo'; //cualquier nombre
        mongoose_1.default.set('useFindAndModify', true); //siempre
        console.log(process.env.MONGODB_URL);
        mongoose_1.default.connect(MONGO_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true //SIEMPRE
        }).then(function (db) { return console.log('DB is connected'); }); //una vez conectes muestra log
        //Usos
        this.app.use(express_1.default.json()); //para entender formatos json
        this.app.use(express_1.default.urlencoded({ extended: false })); //por si acaso envio formularis
    };
    Server.prototype.routes = function () {
        this.app.use('/api/subject', SubjectRoutes_1.default); //para que todas tengan /api antes
        this.app.use('/api/student', StudentRoutes_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port')); //pillas el port
        console.log('server on port ', this.app.get('port'));
    };
    return Server;
}());
var server = new Server();
server.start(); //ejecutas la funcion start
