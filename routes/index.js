var express = require('express');
var router = express.Router();
var requireLogin = require('./requireLogin');

/* GET home page. */
router.get('/', requireLogin, function(req, res, next) {
  res.render('index', {});
});

router.post('/',function(req, res){
  res.render(res.body.url , {});
})

module.exports = router;
