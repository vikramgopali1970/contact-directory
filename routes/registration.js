/**
 * Created by vgopali on 28-09-2016.
 */
var express = require('express');
var dbSchema = require('./mongoUserDb');
var router = express.Router();

var requireLogin = require('./requireLogin');

router.get('/', requireLogin, function(req, res, next) {
    res.render('registration', { });
});

router.post('/', function(req, res, next){
    var fname,lname,uname,password;
    fname = req.body.fname;
    lname = req.body.lname;
    uname = req.body.uname_1;
    password = req.body.pass_1;
    console.log('received params'+fname,lname,uname,password);

    var newContact = new dbSchema({fname:fname, lname:lname, password_2: password, uname_2 : uname});


        var savedYes = dbSchema.find({uname_2: uname}, function (err, srchRes) {
            if (err) throw err;
            // object of all the users
            console.log('later chechking'+srchRes.length);
            console.log('later chechking in obj'+srchRes);
            if(srchRes.length > 0) {
                console.log("username already exists");
                res.json({success: 'username_already_exists'});
            }else{
                newContact.save(function (err) {
                    if (err) throw err;
                    //error
                    console.log('User saved successfully!');
                    res.json({success:true});
                });
            }
                //res.json({success:true});
        });

        /*savedYes.then(function() {

        }).catch(function(){
            console.log('not saved to db');
            res.status(500);
            res.json();
        });*/
});

module.exports = router;