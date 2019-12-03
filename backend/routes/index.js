var express = require("express");
var router = express.Router();

const hostname= "localhost";
const port = 3001;

var app = express();

app.listen(port, hostname, () => {
console.log('mon server fonctionne')
});

module.exports = router;
