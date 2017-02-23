/**
 * Created by yangjian0101 on 2017/2/23.
 */

var multer=require('multer');

var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
//添加配置文件到muler对象。
var upload = multer({
    storage: storage
}).single('file');


//如需其他设置，请参考multer的limits,使用方法如下。
//var upload = multer({
//    storage: storage,
//    limits:{}
// });

exports.dataInput = function (req, res, next) {
    upload(req, res, function (err) {
        //添加错误处理
        if (err) return next(err);
        //文件信息在req.file或者req.files中显示。
        // console.log(req);
        res.send(req)
    });
}