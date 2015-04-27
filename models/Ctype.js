var mongoose = require('../mongodb');
var Schema = mongoose.Schema;
var CtypeSchema = new Schema({
    name: String,
    fID: Schema.Types.ObjectId,
    isUsed: Boolean
});

var CtypeModel = mongoose.model('Ctype', CtypeSchema, 'Ctype'); //最后一个参数是你想要保存的集合名,默认是复数

function Ctype(ctype) {
    this.id = Ctype.id;
    this.name = ctype.name;
    this.fID = ctype.fID;
    this.isUsed = ctype.isUsed;
}
var datas = [{'name':'鞋','fID':'553af97817e4ae5aba3e61f7','isUsed':true},{'name':'家居生活','fID':'553af97817e4ae5aba3e61f8','isUsed':true},{'name':'成人用品','fID':'553af97817e4ae5aba3e61f8','isUsed':true},{'name':'化妆品','fID':'553af97817e4ae5aba3e61f8','isUsed':true}]

Ctype.addBath = function(callback) {
    // CtypeModel.create(datas,function(err, node, numAffected) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("node created and saved: " + node);
    //     }
    // })
}

Ctype.addone = function(callback) {
    // CtypeModel.create({
    //     name: '服装'
    // }, function(err, node, numAffected) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("node created and saved: " + node);
    //     }
    // });
}

Ctype.update = function(callback) {
    CtypeModel.update({fID:'553a41f0a7ec27c7018a24ec'
    }, {
        $set: {
            fID: '553af9415d449cd801e358c8'
        }
    }, function(err, doc) {
        if (err)
            callback(err);
        else
            callback(null, doc);
    });
}

Ctype.getAll = function(callback) {
    CtypeModel.find(function(err, doc) {
        if (err)
            callback(err);
        else
            callback(null, doc);
    });
}

module.exports = Ctype;