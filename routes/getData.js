/**
 * Created by Vikram on 9/7/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('getData', { });
});

module.exports = router;