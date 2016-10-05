/**
 * Created by vgopali on 29-09-2016.
 */
var express = require('express');
var dbSchema = require('./mongoUserDb');
var router = express.Router();

var requireLogin = require('./requireLogin');

router.get('/', function(req, res, next) {
    res.render('login', { });
});

router.post('/', function(req, res, next){
    var userName,passWord;
    userName = req.body.param1;
    passWord = req.body.param2;

    //checking purpose
    console.log('received111 the params '+userName+' '+passWord);
    if(!userName && !passWord){
        res.status(500);
        res.json();
    }else {
        var savedYes = dbSchema.findOne({uname_2: userName}, function (err, srchRes) {
                if (err) throw err;
                // object of all the users
                console.log('later chechking login' + srchRes);
                console.log('later chechking in obj login' + srchRes);
                if(srchRes == null){
                    res.status(500);
                    res.json();
                }else {
                    if (srchRes.password_2 === passWord) {
                        console.log('here error logged121212');
                        req.session.user = srchRes;
                        console.log(req.session.user);
                        res.json({success: true});
                    } else {
                        res.status(500);
                        res.json();
                    }
                }
            }

            //res.json({success:true});
        );
    }
})

module.exports = router;