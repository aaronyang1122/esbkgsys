/**
 * Created by yangjian0101 on 2017/2/22.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        ch: String,
        en: String
    },
    section: [
        {
            title: {
                ch: String,
                en: String
            },
            content: {
                ch: String,
                en: String
            },
            img: String,
            link: String,
            textposition: String,
            index: Number
        }
    ],
    index: {
        type: Number,
        default: 0
    },
    link: String,
    updatetime: {
        type: Date,
        default: Date.now
    },
    createtime: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', productSchema);