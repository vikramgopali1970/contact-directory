/**
 * Created by Vikram on 9/7/2016.
 */
var express = require('express');
var dbSchema = require('./mongoConn');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('getData', { });
});

router.post('/', function(req, res, next) {
    var searchQuery = req.body.searchquery;
    console.log('posted string is '+searchQuery);
    next(searchQuery);
},function (searchQuery, req, res, next) {
    console.log("required srtinf "+searchQuery);
    var qresult = dbSchema.find({fname: new RegExp(searchQuery, '')},function (err, queryRes) {
        if (err) throw err;
    });
    /*for(var property in qresult){
        console.log('search results are '+property.);
    }*/
    console.log("yooo"+qresult.exec())
    res.render('getData',{locals:{data : qresult}});
});

module.exports = router;