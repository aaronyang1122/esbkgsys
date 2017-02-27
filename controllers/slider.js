/**
 * Created by yangjian0101 on 2017/2/23.
 */

var Slider = require('../service').Slider;

exports.list = function (req, res, next) {
    Slider.list(function (err, list) {
        if (err) return next(err);
        console.log(Object.isFrozen(list[0]))
        var _list = list.map(function (e) {
            e.aa = 'aaa';
            return e;
            // console.log(Object.isExtensible(e))
        })
console.log(_list)
        res.send({
            content: _list
        });
    })
}

exports.add = function (req, res, next) {
    var checkkeys = true;
    ['title','logo','prdpic','content','textposition'].forEach(function (e, i, arr) {
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
}

exports.delete = function (req, res, next) {
    Slider.delete(req.body.id, function (err) {
        // res.status(500).send(err.message);
        if (err) return next(err);
        res.send('delete successful');
    })
}

exports.update = function (req, res, next) {
    Slider.update(req.query.id, req.body, function (err, item) {
        if (err) return next(err);
        res.send(item);
    })
}