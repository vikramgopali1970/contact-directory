/**
 * Created by Vikram on 9/7/2016.
 */
var express = require('express');
var dbSchema = require('./mongoConn');
var router = express.Router();
var requireLogin = require('./requireLogin');

var f1,f2,f3,f4;

router.get('/', requireLogin, function(req, res, next) {
    res.render('insertData', { });
});

router.post('/', function(req, res, next) {
    f1 = req.body.fname;
    f2 = req.body.lname;
    f3 = req.body.mnumber;
    f4 = req.body.email1;
    console.log('inside getdata',f1,f2,f3,f4);

    var newContact = new dbSchema({fname:f1,lname:f2,mnumber : f3, email_1 : f4});

    return new Promise(function(resolve, reject) {
       newContact.save(function (err) {
            if (err) throw err;
            console.log('User saved successfully!');
           res.json({'success':true});
           resolve();
        });
    });
    //res.redirect('/savesuccess?valid=saved');

   /*savedYes.then(function() {
       dbSchema.find({}, function (err, qwerty) {
           if (err) throw err;
           // object of all the users
           //console.log(qwerty);
       });
   }).catch(function(){
       console.log('not saved to db');
   });*/
    
});

module.exports = router;