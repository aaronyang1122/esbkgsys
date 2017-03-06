var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Website Building', body: 'The website is building, please come back later' });
});

module.exports = router;
