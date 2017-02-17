/**
 * Created by yangjian0101 on 2017/2/17.
 */

var models = require('../models');
var News = models.News;

// news crud
// create
exports.addNews = function () {

}

// read
exports.newsList = function (callback) {
    News.find({}, {'title': 1, 'readcount': 1, 'index': 1, 'id': 1, 'keyword': 1, 'summary': 1, 'createtime': 1}, callback)
}

exports.newDetail = function () {
    
}

// update
exports.modifyNews = function () {
    
}

// delete
exports.delNews = function () {
    
}
