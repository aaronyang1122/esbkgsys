/**
 * Created by yangjian0101 on 2017/2/17.
 */

var models = require('../models');
var commonfunc = require('../common/common');
var News = models.News;

// News CRUD

// Create
exports.addNews = commonfunc.Create.bind(News);

// Read
    // List
exports.newsList = commonfunc.List.bind(News, {'title': 1, 'readcount': 1, 'index': 1, 'keyword': 1, 'createtime': 1});
    // Detail
exports.newDetail = commonfunc.Detail.bind(News);

// Update
exports.updateNews = commonfunc.Update.bind(News);

// Delete
exports.delNews = commonfunc.Delete.bind(News);