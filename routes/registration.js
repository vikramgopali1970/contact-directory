/**
 * Created by vgopali on 28-09-2016.
 */
var express = require('express');
var dbSchema = require('./mongoUserDb');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('registration', { });
});

router.post('/', function(req, res, next){
    var fname,lname,uname,password;
    fname = req.body.fname;
    lname = req.body.lname;
    uname = req.body.uname123;
    password = req.body.pass;
    console.log('received params'+fname,lname,uname,password);

    var newContact = new dbSchema({fname:fname, lname:lname, password: password, uname : uname});


        var savedYes = newContact.save(function (err) {
            if (err) throw err;
            console.log('User saved successfully!');
        });

        savedYes.then(function() {
            dbSchema.find({}, function (err, qwerty) {
                if (err) throw err;
                // object of all the users
                console.log('later chechking'+qwerty);
            });
        }).catch(function(){
            console.log('not saved to db');
        });
    res.redirect('/savesuccess');
});

module.exports = router;