/**
 * Created by yangjian0101 on 2017/2/22.
 */

var models = require('../models');
var commonfunc = require('../common/common');
var Product = models.Product;

// Product CRUD

// Create
exports.addProduct = commonfunc.Create.bind(Product);

// Read
    // List
exports.productList = commonfunc.List.bind(Product, {'name': 1, 'index': 1, 'link': 1});
    // Detail
exports.productDetail = commonfunc.Detail.bind(Product);

// Update
exports.updateProduct = commonfunc.Update.bind(Product);

// Delete
exports.delProduct = commonfunc.Delete.bind(Product);