'use strict';
const User = require('../models/user.model.js');


// Create and Save a new User
exports.create = (req, res) => {

  // Create a new User
  const user = new User({
    location: req.body.location,
    personsInHouse: req.body.personsInHouse,
    houseSize: req.body.houseSize || ""
  });

  // Save User in the database + promise
  user
    .save()
    .then(user => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.status(200).json({user});
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      console.error(err);
      // appropriate message
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findPersons = (req, res) =>{
  User.find({}, {personsInHouse: 1, location: 1, _id: 0})
  //User.collection.distinct("personsInHouse")
  //User.collection.distinct("location")
  .then(user=> {
    res.status(200).json({user});
  })
  .catch(err=> {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users."

    });
  });
};
exports.findLocation = (req, res) => {
  
  //User.find({}, 'location')
  User.collection.distinct("location")
  .then(user => {
    res.status(200).json({user});
  })
  .catch(err=> {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users."
    });
  });
};

// Retrieve and return all Users from the database.
exports.findAllAll = (req, res) => {
   User.find()
  // User.collection.distinct("_id")
     .then(users => {
       res.status(200).json({users});
     })
     .catch(err => {
       res.status(500).send({
         message: err.message || "Some error occurred while retrieving users."
       });
     });
 };

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
 // User.find({}, {_id: 1})
  User.collection.distinct("_id")
    .then(users => {
      res.status(200).json({users});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};
        
// Find a single User with a UserId
exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({
          message: "User not found with id " + req.params.userId
        });
      }
      res.status(200).json({ user });
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).json({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(500).json({
        message: "Error retrieving user with id " + req.params.userId
      });
    });
};
  
  // Update a User identified by the UserId in the request
  exports.update = (req, res) => {
    // Validate Request
    if (!req.body._id) {
      return res.status(400).send({
        message: 'id can not be empty'
      });
    }
  
    // Find user and update it with the request body
    User.findByIdAndUpdate(
      req.params.userId,
      {
        location: req.body.location,
      personsInHouse: req.body.personsInHouse,
      houseSize: req.body.houseSize,
      _id: req.body.houseSize || ''
      },
      { new: true }
    )
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User not found with id ' + req.params.userId
          });
        }
        res.send(user);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'User not found with id ' + req.params.userId
          });
        }
        return res.status(500).send({
          message: 'Error updating user with id ' + req.params.userId
        });
      });
    };
  
   // Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.userId
      });
    });
};