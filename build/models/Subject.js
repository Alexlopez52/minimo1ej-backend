"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Student_1 = __importDefault(require("./Student"));
var SubjectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    students: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: Student_1.default
        }]
});
exports.default = mongoose_1.model('Subject', SubjectSchema);
