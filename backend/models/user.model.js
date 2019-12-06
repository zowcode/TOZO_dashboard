const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    location: String,

    personsInHouse:String,
  
    houseSize: String,

    _id :{
        $oid: String,
      required: true
    }

  }
);

module.exports = mongoose.model('User', userSchema);
