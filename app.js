var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var news = require('./routes/news');
var product = require('./routes/product');
var slider = require('./routes/slider');
var upload = require('./routes/upload');
var staticdata = require('./routes/staticdata');
var user = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));

// static service
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'www')));
app.use('/backstage', express.static(path.join(__dirname, 'backstage')));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// route index
app.use('/', index);
// route news
app.use('/api/news', news);
// route product
app.use('/api/product', product);
// route slider
app.use('/api/slider', slider);
// route upload
app.use('/api/upload', upload);
// route auth
app.use('/api/auth', user);
// route staticdata
app.use('/api/staticdata', staticdata);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
