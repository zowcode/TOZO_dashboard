var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sensorsRouter = require('./routes/sensors');
var measureRouter = require ('./routes/measure');

var app = express();
app.use(cors());
//ajout de la base de donnée
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;

//connection à la database
mongoose.connect(dbURL, {
  useNewUrlParser:true,
  useUnifiedTopology: true
}); 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sensors', sensorsRouter);
app.use('/measure', measureRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
