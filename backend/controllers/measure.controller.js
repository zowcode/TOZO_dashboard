'use strict';
const Measure = require('../models/measure.model.js');
const User = require('../models/user.model.js');
const Sensor = require('../models/sensor.model.js');

exports.findHumidity = (req, res) => {
    Measure.find({type:"humidity"})
    .then(measure=> {
        res.status(200).json({measure});
      })
      .catch(err=> {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
    
        });
      });
};

exports.findPollution = (req, res) => {
    Measure.find({type:"airPollution"})
    .then(measure=> {
        res.status(200).json({measure});
      })
      .catch(err=> {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
    
        });
      });
};

exports.findTemperature = (req, res) => {
    Measure.find({type:"temperature"})
    .then(measure=> {
        res.status(200).json({measure});
      })
      .catch(err=> {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
    
        });
      });
};