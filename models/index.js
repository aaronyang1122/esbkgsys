/**
 * index
 * Created by yangjian0101 on 2017/2/17.
 */

var mongoose = require('mongoose');
var config = require('../config');

mongoose.Promise = global.Promise;

mongoose.connect(config.db, config.dboptions, function (err) {
    if (err) {
        console.log('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

// news
require('./news');
// index slider banner
require('./slider');
// product
require('./product');
// user
require('./user');

exports.News = mongoose.model('News');
exports.Slider = mongoose.model('Slider');
exports.Product = mongoose.model('Product');
exports.User = mongoose.model('User');