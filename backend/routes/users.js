var express = require ('express');
var router = express .Router();

router.get('/', function(req, res, next){
  res.send('respond with a ressource');
});

//Get user listing
router.get('/', (req, res) => {
  res.status(200).json({users});
});

//Get one user
router.get('/:id', (req, res) =>{
  const {id} = req.params;
  const user = _.find(users, ["id", id]);
  res.status(200).json({
    message: "User Found !",
    user
  });
});

//Put new user
router.put('/', (req, res) => {
  const{user} =req.body;
  const id = _.uniqueId();
  req.json({
    message: `just added ${id}`, 
    user: {user, id}
  });
});

//Update user
router.post('/:id', (req, res) =>{
  const {id} = req.params;
  const {user}=req.body;
  const userToUpdate = _.find(users, ["id", id]);
  userToUpdate.user = user;

  res.json({
    message : `Just updated ${id} with ${user}`
  });
});

//Delet user
router.delete('/:id', (req, res) => {
  const{id}=req.params;
  _.remove(users, ["id", id]);
  res.json({
    message: `Just removed ${id}`
  });
});

module.exports=router;

