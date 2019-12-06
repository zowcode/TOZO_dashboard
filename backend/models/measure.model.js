const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
  {
    _id: {
      $oid: String,
      required: true
    },

    type: String,

    creationDate: Date,

    sensorID: {
        $oid: String,
        required: true
    },

   value: String
  }
);

module.exports = mongoose.model('User', measureSchema);
