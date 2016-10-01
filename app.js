var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ContactUsersDb = require('/node_app_1/routes/mongoConn');
var userDb = require('/node_app_1/routes/mongoUserDb');
var session = require('client-sessions');

var tst = require('/node_app_1/routes/insertData');
var options = require('./routes/options');
var users = require('./routes/users');
var insertData = require('./routes/insertData');
var getData = require('./routes/getData');
var loginpage = require('./routes/login');
var savesucces = require('./routes/contactsaved');
var registration = require('./routes/registration')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 0}));
app.set('view engine', 'jade');


//session

//set up a session
app.use(session({
  cookieName : 'session',
  secret : 'eg[isfd-8yF9-7w1970df{}+Ijsli;;to9',
  duration : 10 * 60 * 1000,
  activeDuration : 5*60*1000,
  httpOnly : true,
  secure : true,
  epemeral :true
}));



app.use(function(req,res,next){
  if(req.session && req.session.user){
    userDb.findOne({email : req.session.user.mail},function(err, usr){
      if(usr){
        req.usr = usr;
        delete req.usr.password;
        req.session.user = usr;
        res.locals.user = usr;
      }
      next();
    });
  }else{
    console.log("inside of appUse function failed");
    next();
  }
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/options', options);
app.use('/users', users);
app.use('/getData',getData);
app.use('/insertData',insertData);
app.use('/savesuccess',savesucces);
app.use('/registration',registration);
app.use('/',loginpage);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//session middleware
app.use(session({
  cookieName: 'session',
  secret: 'testin_the _crypt',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
