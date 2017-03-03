/**
 * Created by yangjian0101 on 2017/2/23.
 */

var express = require('express');
var router = express.Router();
var companyinfo = require('../controllers/companyinfo');

/* POST update */
router.post('/', companyinfo);

module.exports = router;