/**
 * Created by Vikram on 9/7/2016.
 */
var express = require('express');
var dbSchema = require('./mongoConn');
var router = express.Router();
var f1,f2,f3,f4;
router.get('/', function(req, res, next) {
    var validRoute = req.query.valid;
    if(validRoute == 'insertData'){
        var doneloading = res.render('insertData', { });
    }else{
        res.send('something is not write......start over');
    }

    doneloading.then(function(){
        var ele = document.getElementById('afterSubmit');
        ele.style.display = "none";
    }).catch(function(){
        console.log('nahi hua bhai');
    })
});

router.post('/', function(req, res, next) {
    f1 = req.body.fname;
    f2 = req.body.lname;
    f3 = req.body.mnumber;
    f4 = req.body.email1;
    console.log('inside getdata',f1,f2,f3,f4);

    var newContact = new dbSchema({fname:f1,lname:f2,mnumber : f3, email : f4});

   var savedYes = newContact.save(function (err) {
        if (err) throw err;
        console.log('User saved successfully!');
    });

   savedYes.then(function() {
       dbSchema.find({}, function (err, qwerty) {
           if (err) throw err;
           // object of all the users
           console.log(qwerty);
       });
   }).catch(function(){
       console.log('not saved to db');
   });
    //res.redirect('/savesuccess?valid=saved');
   /* res.writeHead(302, {
        'Location': 'http://localhost:3010/savesuccess'
    });
    res.end();*/

});



var vars = [router,f1,f2,f3,f4];

module.exports = router;