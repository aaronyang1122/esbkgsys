/**
 * Created by yangjian0101 on 2017/2/17.
 */

var models = require('../models');
var News = models.News;

// news crud
// create
exports.addNews = function (body, callback) {
    var newOne = new News(body);
    newOne.save(function (err) {
        // if (err) throw err;
        callback(err);
    })
}

// read
exports.newsList = function (callback) {
    News.find({}, {'title': 1, 'readcount': 1, 'index': 1, 'keyword': 1, 'createtime': 1}, callback)
}

exports.newDetail = function (id, callback) {
    News.findOne({'_id': id}, callback)
}

// update
exports.updateNews = function (id, body, callback) {
    body.updatetime = new Date();
    News.findByIdAndUpdate(id, body, { new: true }, callback);
}

// delete
exports.delNews = function (id, callback) {
    var item = [];
    switch (id.constructor) {
        case Array:
            id.forEach(function (e, i, arr) {
                item[i] = new Promise(function (resolve, reject) {
                    News.findByIdAndRemove(e, function (err) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    })
                })
            })
            Promise.all(item).then(function () {
                callback();
            }).catch(function (err) {
                callback(err);
            })
            break;
        case String:
            News.findByIdAndRemove(id, callback)
            break;
    }
}