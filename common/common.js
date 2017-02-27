/**
 * Created by yangjian0101 on 2017/2/22.
 */
// function CRUD

// Create
exports.Create = function (body, callback) {
    var newOne = new this(body);
    newOne.save(function (err) {
        // if (err) throw err;
        callback(err);
    })
}

// Read
    // Read List
exports.List = function (params, order, callback) {
    // this.find({}, params, callback)
    switch (arguments.length) {
        case 1:
            callback = params;
            params = {};
            order = {};
            break;
        case 2:
            callback = order;
            order = {};
            break;
    }
    this.find({}, params).sort(order).lean().exec(callback)
}
    // Read Detail
exports.Detail = function (id, callback) {
    this.findOne({'_id': id}, {lean: true}, callback)
}

// Update
exports.Update = function (id, body, callback) {
    body.updatetime = new Date();
    this.findByIdAndUpdate(id, body, { new: true, lean: true }, callback);
}

// Delete
exports.Delete = function (id, callback) {
    var item = [],
        _this = this;
    switch (id.constructor) {
        case Array:
            id.forEach(function (e, i, arr) {
                item[i] = new Promise(function (resolve, reject) {
                    _this.findByIdAndRemove(e, function (err) {
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
            _this.findByIdAndRemove(id, callback)
            break;
    }
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}