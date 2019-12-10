var express = require('express');
var router = express.Router();

var Sensor = require('../controllers/sensor.controller');

// Lodash
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

/* GET sensors listing. */
router.get('/:location', (req, res) => {
    // Get List of sensor and return JSON
    Sensor.findAll(req, res);
    // res.status(200).json({ sensors });
  }); 



// GET one sensor
router.get('/', (req, res) => {
    Sensor.findOne(req, res);
});



module.exports = router;