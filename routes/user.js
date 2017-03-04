/**
 * Created by yangjian0101 on 2017/2/23.
 */

var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

/* POST auth */
router.post('/', user.auth);

module.exports = router;