/**
 * Created by yangjian0101 on 2017/2/17.
 */
var express = require('express');
var router = express.Router();
var news = require('../controllers/news');

/* GET news list */
router.get('/list', news.newsList);

/* GET news detail */
router.get('/detail', news.newDetail);

/* POST new News */
router.post('/addnews', news.addNews);

/* DELETE News */
router.delete('/delnews', news.delNews);

/* UPDATE News */
router.post('/updatenews', news.updateNews);

module.exports = router;