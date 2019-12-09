const mongoose = require("mongoose");

const sensorSchema =  mongoose.Schema(
  {
    creationDate: String,
    location: String,
    userID: String
  },
  
  { collection: "Sensor" }
);

module.exports = mongoose.model('Sensor', sensorSchema);
