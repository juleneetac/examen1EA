"use strict";

import express = require("express");
let router = express.Router();
let casoControl = require('../controllers/casoControl');


router.get('/getCasos', casoControl.getCasos)

router.post('/addSeguimiento', casoControl.postCaso);   

module.exports = router;