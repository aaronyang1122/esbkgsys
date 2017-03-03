/**
 * Created by yangjian0101 on 2017/3/3.
 */

var fs = require('fs');

module.exports = function (req, res, next) {
    var _data = JSON.stringify(req.body);

    fs.open("./public/data/companyinfo.json", "w", function (err, fd) {
        var buf = new Buffer(_data);

        fs.writeFile(fd, buf, function (err) {
            if (err) return next(err);
            res.send('success');
        });
    })
};