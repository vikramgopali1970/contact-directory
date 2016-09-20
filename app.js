var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var User = require('/node_app_1/routes/mongoConn');

var tst = require('/node_app_1/routes/insertData');
var routes = require('./routes/index');
var users = require('./routes/users');
var insertData = require('./routes/insertData');
var getData = require('./routes/getData');
var savesucces = require('./routes/contactsaved');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 0}));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/getData',getData);
app.use('/insertData',insertData);
app.use('/savesuccess',savesucces);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*var silence = new User({fname: 'vikram',lname :'gopali',mnumber : '8892658583', email : ''});*/

/*
var savehua = silence.save(function (err) {
  if (err) throw err;
  console.log('User saved successfully!');
});
*/
/*
savehua.then(function () {
  User.find({}, function(err, users) {
    if (err) throw err;
    // object of all the users
    console.log(users);
  });
}).catch(function () {
  console.log('save nahi ho paya');
});*/

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
