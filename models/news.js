/**
 * news
 * Created by yangjian0101 on 2017/2/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: {
        ch: {type: String},
        en: {type: String}
    },
    keyword: {
        ch: {type: Array},
        en: {type: Array}
    },
    content: {
        ch: {type: String},
        en: {type: String}
    },
    readcount: {
        type: Number,
        default: 0
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
    },
    img: {type: String}
});

newsSchema.index({
    keyword: 1,
    title: 1
});

mongoose.model('News', newsSchema);
