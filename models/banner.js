/**
 * news
 * Created by yangjian0101 on 2017/2/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerSchema = new Schema({
    title: {
        ch: {type: String},
        en: {type: String}
    },
    logo: {
        type: String
    },
    prdpic: {
        type: String
    },
    content: {
        ch: {type: String},
        en: {type: String}
    },
    textposition: {
        type: String
    },
    index: {
        type: Number
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

mongoose.model('Banner', bannerSchema);