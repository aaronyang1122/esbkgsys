/**
 * Created by yangjian0101 on 2017/2/22.
 */

var User = require('../models').User;

// find user

exports.findUser = function (name, callback) {
    User.findOne({'username': name}, callback)
};

