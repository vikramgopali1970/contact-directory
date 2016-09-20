/**
 * Created by Vikram on 9/7/2016.
 */
var express = require('express');
var router = express.Router();
var dbSchema = require('./mongoConn');


router.get('/', function(req, res, next) {
    var validRedirect = req.query.valid;
    if(validRedirect == 'saved'){
        res.render('contactsaved', { });
    }else{
        res.send('somethings not right...   ');
    }

});


module.exports = router;