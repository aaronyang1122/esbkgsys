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

require('./news');

exports.News = mongoose.model('News');
