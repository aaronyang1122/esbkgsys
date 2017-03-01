/**
 * news
 * Created by yangjian0101 on 2017/2/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: {
        ch: String,
        en: String
    },
    content: {
        ch: Schema.Types.Mixed,
        en: Schema.Types.Mixed
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
    img: String
});

newsSchema.index({
    keyword: 1,
    title: 1
});

mongoose.model('News', newsSchema);
