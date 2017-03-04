/**
 * Created by yangjian0101 on 2017/2/23.
 */
var User = require('../service').User;

exports.auth = function (req, res, next) {
    User.findUser(req.body.username, function (err, user) {
        if (err) return next(err);
        if (user !== null && user.password === req.body.password) {
            res.send({
                isAuthed: 1
            });
        } else {
            res.send({
                isAuthed: 0
            });
        }
    })
};