/**
 * Created by yangjian0101 on 2017/2/17.
 */

var models = require('../models');
var News = models.News;

// news crud
// create
exports.addNews = function (body, callback) {
    console.log(body)
    var newOne = new News(body);
    newOne.save(function (err) {
        if (err) throw err;
        callback(err);
    });
}

// read
exports.newsList = function (callback) {
    News.find({}, {'title': 1, 'readcount': 1, 'index': 1, 'keyword': 1, 'createtime': 1}, callback)
}

exports.newDetail = function (id, callback) {
    News.findOne({'_id': id}, callback)
}

// update
exports.modifyNews = function () {
    
}

// delete
exports.delNews = function (id, callback) {
    News.findByIdAndRemove(id, callback)
}