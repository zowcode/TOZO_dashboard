var express = require('express');
var router = express.Router();
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

let users= [{
  user: "Arthur",
  id: "0"
}];


/* GET users listing. */
router.get('/', function(req, res, next) {
  //Get id in params
   const {id} = req.params;
   // Find user in db
   const user = _.find(users, ["id", id]);
  // return user
  res.status(200).json({message: 'user foundd! ', user});
  // GET list of users
  //res.status(200).json({users});
});

module.exports = router;
