/**
 * news
 * Created by yangjian0101 on 2017/2/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});

mongoose.model('User', userSchema);