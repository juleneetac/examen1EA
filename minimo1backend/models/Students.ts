'use strict';

import mongoose = require("mongoose");
let Schema = mongoose.Schema;
let students = new Schema({
    name: String,
    address: String,
    phones: [{
        _id: false,
        home: String,
        work: String
    }],
    studies: [String]
});
module.exports = mongoose.model('students', students);
