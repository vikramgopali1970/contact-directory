var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/',function(req, res){
  res.render(res.body.url , {});
})

module.exports = router;
