/**
 * Created by yangjian0101 on 2017/2/17.
 */

var commonfunc = require('../common/common');
var News = require('../models').News;

// News CRUD

// Create
exports.add = commonfunc.Create.bind(News);

// Read
    // List
exports.list = commonfunc.List.bind(News, {'title': 1, 'readcount': 1, 'index': 1, 'keyword': 1, 'createtime': 1, 'updatetime': 1, 'img': 1}, {'index': -1, 'updatetime': -1, 'createtime': -1});
    // Detail
exports.detail = commonfunc.Detail.bind(News);

// Update
exports.update = commonfunc.Update.bind(News);

// Delete
exports.delete = commonfunc.Delete.bind(News);