/**
 * Created by yangjian0101 on 2017/2/23.
 */

var express = require('express');
var router = express.Router();
var staticdata = require('../controllers/staticdata');

/* POST update */
router.post('/:item', staticdata);

module.exports = router;