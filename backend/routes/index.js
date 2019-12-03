var express = require("express");
var router = express.Router();

const hostname= "localhost";
const port = 3001;

var app = express();

app.listen(port, hostname, () => {
  console.log('Mon erveur est demmaré sur http://${hostname}.${port} \n');
})

// GET
app.get('test',(req,res)=>{
    res.json({
        req = req.method,
        data: "this is a get"
    })
});


/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("This is my homepage");
});

module.exports = router;
