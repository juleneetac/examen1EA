'use strict';

import mongoose = require("mongoose");
let Schema = mongoose.Schema;
let subjects = new Schema({
    name: String,
    students: [{ type: mongoose.Types.ObjectId, ref: 'students' }]
});
module.exports = mongoose.model('subjects', subjects);
