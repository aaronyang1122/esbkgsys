/**
 * Created by yangjian0101 on 2017/2/23.
 */

var express = require('express');
var router = express.Router();
// var upload = require('../controllers/upload');



var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })



/* POST update */
router.post('/', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    // if (err) return next(err);
    console.log(req);
    res.send(req.file)
});


module.exports = router;