/**
 * Created by yangjian0101 on 2017/2/17.
 */
var News = require('../service').News;

exports.newsList = function (req, res, next) {
    News.newsList(function (err, list) {
        if (err) return next(err);
        res.send(list);
    })
}