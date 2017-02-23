/**
 * Created by yangjian0101 on 2017/2/23.
 */

var Product = require('../service').Product;

exports.list = function (req, res, next) {
    Product.list(function (err, list) {
        if (err) return next(err);
        res.send(list);
    })
}

exports.add = function (req, res, next) {
    var checkkeys = true;
    ['name','section'].forEach(function (e, i, arr) {
        if (!req.body.hasOwnProperty(e)) return checkkeys = false;
    });
    if (checkkeys) {
        Product.add(req.body, function (err) {
            if (err) return next(err);
            res.send('update successful');
        })
    } else {
        res.status(500).send('bad params request')
    }
}

exports.detail = function (req, res, next) {
    Product.detail(req.query.id, function (err, detail) {
        if (err) return next(err);
        res.send(detail===null?{}:detail);
    })
}

exports.delete = function (req, res, next) {
    Product.delete(req.body.id, function (err) {
        // res.status(500).send(err.message);
        if (err) return next(err);
        res.send('delete successful');
    })
}

exports.update = function (req, res, next) {
    Product.update(req.query.id, req.body, function (err, item) {
        if (err) return next(err);
        res.send(item);
    })
}