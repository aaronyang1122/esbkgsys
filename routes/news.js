/**
 * Created by yangjian0101 on 2017/2/17.
 */

var express = require('express');
var router = express.Router();
var news = require('../controllers/news');

/* GET news list */
router.get('/list', news.list);

/* GET news detail */
router.get('/detail', news.detail);

/* POST add News */
router.post('/add', news.add);

/* DELETE News */
router.delete('/delete', news.delete);

/* UPDATE News */
router.post('/update', news.update);

module.exports = router;