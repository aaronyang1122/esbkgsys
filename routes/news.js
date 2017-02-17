/**
 * Created by yangjian0101 on 2017/2/17.
 */
var express = require('express');
var router = express.Router();
var news = require('../controllers/news');

/* GET users listing. */
router.get('/list', news.newsList);

module.exports = router;