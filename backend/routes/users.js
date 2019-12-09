var express = require('express');
var router = express.Router();

// we import our user controller
var User = require('../controllers/user.controller');

// Lodash
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

/* GET users listing. */
router.get('/', (req, res) => {
  // Get List of user and return JSON
  User.findAll(req, res);
  // res.status(200).json({ users });
});

/* GET one user. */
router.get('/:id', (req, res) => {
  // const { id } = req.params;
  // Find user in DB
  User.findOne(req, res);
  // Return user
  // res.status(200).json({
  //   message: 'User found!',
  //   user 
  // });
});


router.post('/new/:id', (req, res) => {
  // const { id } = req.params;
  // Find user in DB
  User.create(req, res);
  // Return user
  // res.status(200).json({
  //   message: 'User found!',
  //   user 
  // });
});

/* DELETE user. 
router.delete('/:id', (req, res) => {
  // Get the :id of the user we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(users, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});

/* UPDATE user.
router.post('/:id', (req, res) => {
  // Get the :id of the user we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the user we want to update from the body of the request
  const { user } = req.body;
  // Find in DB
  const userToUpdate = _.find(users, ["id", id]);
  // Update data with new data (js is by address)
  userToUpdate.user = user;

  // Return message
  res.json({
    message: `Just updated ${id} with ${user}`
  });

 
});
 */
module.exports = router;
