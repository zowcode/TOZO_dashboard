const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema(
  {
    _id :{
        $oid: String,
      required: true
    },

    creationDate: Date,

    location:String,
  
    userID :{
        $oid: String,
      required: true
    },

  }
);

module.exports = mongoose.model('User', sensorSchema);
