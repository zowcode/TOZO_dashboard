const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    location: String,
    personsInHouse: Number,
    houseSize: String
  },
  { collection: "User" }
);

module.exports = mongoose.model("User", userSchema);
