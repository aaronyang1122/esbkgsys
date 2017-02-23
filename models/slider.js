/**
 * news
 * Created by yangjian0101 on 2017/2/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sliderSchema = new Schema({
    title: {
        ch: String,
        en: String
    },
    logo: String,
    prdpic: String,
    content: {
        ch: String,
        en: String
    },
    textposition: String,
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