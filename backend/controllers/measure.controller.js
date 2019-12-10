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

exports.findPollutionByCountry = (req, res) => {
   
    Measure.find({type:"airPollution"})
    
    let idUser = Sensor.find({_id: idSensor[i].sensorID}, {userID: 1, _id: 0})
    User.find({_id: idUser.userID}, {location: 1, _id: 0})
    .then(user => {
        res.status(200).json({user});
    })
    .catch(err => {
        res.status(500).send({
            meassage: err.message || "error mec"
        });
    });

};