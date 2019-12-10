'use strict';
var express = require('express');
var router = express.Router();

// we import our user controller
var Measure = require('../controllers/measure.controller');

// Lodash
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

//GET humidity measures
router.get('/humidity', (req, res)=> {
    Measure.findHumidity(req, res);
});

module.exports = router;