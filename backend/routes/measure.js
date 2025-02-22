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

//GET polution measures
router.get('/pollution', (req, res) => {
    Measure.findPollution(req, res);
});

//GET temperature measures
router.get('/temperature', (req, res) => {
    Measure.findTemperature(req, res);
});

module.exports = router;