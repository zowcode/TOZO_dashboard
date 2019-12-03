var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const hostname= "localhost";
const port = 3001;

var app = express();

<<<<<<< HEAD
// GET
app.get('test',(req,res)=>{
    res.json({
        req = req.method,
        data: "this is a get"
    })
});


=======
//ajout de la base de donnée
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = 'mongodb://localhost:27017/${dbName}';

//connection à la database
mongoose.connect(dbURL, {
    userNewUrlParser: true
});
>>>>>>> a16eace213eb65f05b10022177a8fe5c567ba86f

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
