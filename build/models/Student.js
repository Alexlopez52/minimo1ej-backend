"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var StudentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phones: [{
            telname: String,
            telnumber: String
        }]
});
exports.default = mongoose_1.model('Student', StudentSchema);
