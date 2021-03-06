"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Subject_1 = __importDefault(require("../models/Subject"));
var Student_1 = __importDefault(require("../models/Student"));
var SubjectRoutes = /** @class */ (function () {
    function SubjectRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    SubjectRoutes.prototype.getSubjects = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var subjects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Subject_1.default.find()];
                    case 1:
                        subjects = _a.sent();
                        res.json(subjects);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjectRoutes.prototype.createSubject = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newSubject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newSubject = new Subject_1.default(req.body);
                        return [4 /*yield*/, newSubject.save()];
                    case 1:
                        _a.sent();
                        console.log(newSubject);
                        res.json({ data: newSubject });
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjectRoutes.prototype.deleteSubject = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name;
                        return [4 /*yield*/, Subject_1.default.findOneAndDelete({ name: name })]; //busca url que coincida
                    case 1:
                        _a.sent(); //busca url que coincida
                        res.json("ok");
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjectRoutes.prototype.updateSubject = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var studentid, name, subject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, Student_1.default.findOne(req.body, '_id')];
                    case 1:
                        studentid = _a.sent();
                        console.log(studentid);
                        name = req.params.name;
                        return [4 /*yield*/, Subject_1.default.findOneAndUpdate({ name: name }, { $push: { students: studentid } }, { new: true })]; //busca url que coincida
                    case 2:
                        subject = _a.sent() //busca url que coincida
                        ;
                        res.json(subject);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjectRoutes.prototype.routes = function () {
        this.router.get('/todos', this.getSubjects);
        this.router.post('/todos', this.createSubject);
        this.router.delete('/todos/:name', this.deleteSubject);
        this.router.put('/todos/:name', this.updateSubject);
    };
    return SubjectRoutes;
}());
var subjcetRoute = new SubjectRoutes();
exports.default = subjcetRoute.router;
