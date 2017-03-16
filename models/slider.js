/**
 * news
 * Created by yangjian0101 on 2017/2/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sliderSchema = new Schema({
    title: String,
    link: String,
    imgpc: {
        ch: String,
        en: String
    },
    imgmobile: {
        ch: String,
        en: String
    },
    index: {
        type: Number,
        default: 0
    },
    updatetime: {
        type: Date,
        default: Date.now
    },
    createtime: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Slider', sliderSchema);