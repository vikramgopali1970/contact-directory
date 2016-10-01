/**
 * Created by Vikram on 9/7/2016.
 */
var express = require('express');
var router = express.Router();
var dbSchema = require('./mongoConn');


router.get('/', function(req, res, next) {
    res.render('contactsaved', { });

});


module.exports = router;