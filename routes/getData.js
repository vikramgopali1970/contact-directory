/**
 * Created by Vikram on 9/7/2016.
 */
var express = require('express');
var dbSchema = require('./mongoConn');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('getData', {});
});

router.post('/', function (req, res) {
    var searchQuery = req.body.name;
    return new Promise(function (resolve, reject) {
        dbSchema.find({fname: new RegExp(searchQuery, '')}, function (err, queryRes) {
            if (err) {
                res.json({success: false, error: err});
            }
            res.json({success: true, data: queryRes});
        });
    });
});
module.exports = router;