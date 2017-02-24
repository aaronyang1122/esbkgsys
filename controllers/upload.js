/**
 * Created by yangjian0101 on 2017/2/23.
 */

var multer = require('multer');
var fs = require('fs');

var outputFolder = function (type) {
    let Folder = type ? './public/images/' + type : './public/uploads/';
    if (!fs.existsSync(Folder)) fs.mkdirSync(Folder);
    return Folder;
}

// options: storage
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, outputFolder(req.params.type))
    },
    filename: function (req, file, callback) {
        var fileFormat = (file.originalname).split(".");
        callback(null, req.params.type ? req.params.type + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1] : file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});

// set options
var upload = multer({
    storage: storage,
    // fileFilter: function (req, file, callback) {
    //     console.log(file);
    //     if (file.mimetype === 'image/png') {
    //         callback(new Error('I don\'t have a clue!'))
    //     }
    // },
    limits: {
        fieldNameSize: 200,
        fieldSize: 2
    }
}).single('file');

module.exports = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) return next(err)
        res.send(req.file)
    });
}