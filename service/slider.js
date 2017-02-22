/**
 * Created by yangjian0101 on 2017/2/22.
 */

var models = require('../models');
var commonfunc = require('../common/common');
var Slider = models.Slider;

// Slider CRUD

// Create
exports.addSlider = commonfunc.Create.bind(Slider);

// Read
    // List
exports.sliderList = commonfunc.List.bind(Slider);

// Update
exports.updateSlider = commonfunc.Update.bind(Slider);

// Delete
exports.delSlider = commonfunc.Delete.bind(Slider);