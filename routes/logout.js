/**
 * Created by vgopali on 02-10-2016.
 */
var express = require('express');
var dbSchema = require('./mongoUserDb');
var router = express.Router();

var requireLogin = require('./requireLogin');``

router.get('/', requireLogin, function(req, res, next) {
    console.log('inside session b4 destroy'+req.session.user);
    req.session.destroy();
    console.log('inside session destroy'+req.session.user);
    res.render('logout', { });

});

module.exports = router;