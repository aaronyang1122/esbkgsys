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
    this.find({}, params).sort(order).exec(callback)
}
    // Read Detail
exports.Detail = function (id, callback) {
    this.findOne({'_id': id}, callback)
}

// Update
exports.Update = function (id, body, callback) {
    body.updatetime = new Date();
    this.findByIdAndUpdate(id, body, { new: true }, callback);
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