/**
 * Created by yangjian0101 on 2017/2/23.
 */

var express = require('express');
var router = express.Router();
var product = require('../controllers/product');

/* GET Product List */
router.get('/list', product.list);

/* GET Product Detail */
router.get('/detail', product.detail);

/* POST add Product */
router.post('/add', product.add);

/* DELETE Product */
router.delete('/delete', product.delete);

/* UPDATE Product */
router.post('/update', product.update);

module.exports = router;