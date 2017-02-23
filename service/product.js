/**
 * Created by yangjian0101 on 2017/2/22.
 */

var commonfunc = require('../common/common');
var Product = require('../models').Product;

// Product CRUD

// Create
exports.add = commonfunc.Create.bind(Product);

// Read
    // List
exports.list = commonfunc.List.bind(Product, {'name': 1, 'index': 1, 'link': 1}, {'index': -1, 'createtime': -1});
    // Detail
exports.detail = commonfunc.Detail.bind(Product);

// Update
exports.update = commonfunc.Update.bind(Product);

// Delete
exports.delete = commonfunc.Delete.bind(Product);