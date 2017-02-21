/**
 * Created by yangjian0101 on 2017/2/17.
 */
var _ = require('lodash');
var News = require('../service').News;

exports.newsList = function (req, res, next) {
    News.newsList(function (err, list) {
        if (err) return next(err);
        res.send(list);
    })
}

exports.addNews = function (req, res, next) {
    var checkkeys = true;

    ['title','content','keyword','img'].forEach(function (e, i, arr) {
        if (!req.body.hasOwnProperty(e)) return checkkeys = false;
    });

    if (checkkeys) {
        News.addNews(req.body, function (err) {
            if (err) return next(err);
            res.send('update successful');
        })
    } else {
        res.status(500).send('bad params request')
    }
}

exports.newDetail = function (req, res, next) {
    News.newDetail(req.query.id, function (err, detail) {
        if (err) return next(err);
        res.send(detail===null?{}:detail);
    })
}

exports.delNews = function (req, res, next) {
    News.delNews(req.body.id, function (err) {
        if (err) {
            // console.log(err.message)
            // res.status(500).send(err.message);
            return next(err);
        } else {
            res.send('delete successful');
        }
    })
}

exports.updateNews = function (req, res, next) {
    News.updateNews(req.query.id, req.body, function (err, item) {
        if (err) {
            // console.log(err.message)
            // res.status(500).send(err.message);
            return next(err);
        } else {
            res.send(item);
        }
    })
}