/**
 * Created by yangjian0101 on 2017/2/23.
 */
var Slider = require('../service').Slider;

exports.list = function (req, res, next) {
    Slider.list(function (err, list) {
        if (err) return next(err);
        list.forEach(function (e) {
            e.createtime = new Date(e.createtime).Format("yyyy-MM-dd hh:mm:ss");
            e.updatetime = new Date(e.updatetime).Format("yyyy-MM-dd hh:mm:ss");
            return e;
        });
        res.send({
            content: list
        });
    })
};

exports.detail = function (req, res, next) {
    Slider.detail(req.query.id, function (err, detail) {
        if (err) return next(err);
        if (detail) {
            detail.createtime = new Date(detail.createtime).Format("yyyy-MM-dd hh:mm:ss");
            detail.updatetime = new Date(detail.updatetime).Format("yyyy-MM-dd hh:mm:ss")
        }
        res.send(detail===null?{}:detail);
    })
};

exports.add = function (req, res, next) {
    var checkkeys = true;
    ['imgpc','imgmobile'].forEach(function (e, i, arr) {
        if (!req.body.hasOwnProperty(e)) return checkkeys = false;
    });
    if (checkkeys) {
        Slider.add(req.body, function (err) {
            if (err) return next(err);
            res.send('update successful');
        })
    } else {
        res.status(500).send('bad params request')
    }
};

exports.delete = function (req, res, next) {
    Slider.delete(req.body.id, function (err) {
        // res.status(500).send(err.message);
        if (err) return next(err);
        res.send('delete successful');
    })
};

exports.update = function (req, res, next) {
    Slider.update(req.query.id, req.body, function (err, item) {
        if (err) return next(err);
        item.updatetime = new Date(item.updatetime).Format("yyyy-MM-dd hh:mm:ss");
        item.createtime = new Date(item.createtime).Format("yyyy-MM-dd hh:mm:ss");
        res.send(item);
    })
};