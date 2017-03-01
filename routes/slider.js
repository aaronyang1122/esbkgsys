/**
 * Created by yangjian0101 on 2017/2/23.
 */

var express = require('express');
var router = express.Router();
var slider = require('../controllers/slider');

/* GET Slider List */
router.get('/list', slider.list);

/* POST add Slider */
router.post('/add', slider.add);

/* GET Product Detail */
router.get('/detail', slider.detail);

/* DELETE Slider */
router.delete('/delete', slider.delete);

/* UPDATE Slider */
router.post('/update', slider.update);

module.exports = router;