/**
 * Created by yangjian0101 on 2017/2/22.
 */

var commonfunc = require('../common/common');
var Slider = require('../models').Slider;

// Slider CRUD

// Create
exports.add = commonfunc.Create.bind(Slider);

// Read
    // List
exports.list = commonfunc.List.bind(Slider,{},{'index': -1, 'updatetime': -1, 'createtime': -1});

// Update
exports.update = commonfunc.Update.bind(Slider);

// Delete
exports.delete = commonfunc.Delete.bind(Slider);