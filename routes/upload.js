/**
 * Created by yangjian0101 on 2017/2/23.
 */

var express = require('express');
var router = express.Router();
var upload = require('../controllers/upload');

/* POST update */
router.post('/:type?', upload.dataInput);

module.exports = router;