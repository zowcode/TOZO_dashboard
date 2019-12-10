'use strict';
const Measure = require('../models/measure.model.js');

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