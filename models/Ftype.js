var mongoose = require('../mongodb');
var Schema = mongoose.Schema;

var FtypeSchema = new Schema({
    // _id: {
    //     type: [Schema.Types.ObjectId],
    //     ref: 'Ftype'
    // },
    name: String
});

var FtypeModel = mongoose.model('Ftype', FtypeSchema, 'Ftype'); //最后一个参数是你想要保存的集合名,默认是复数

function Ftype(ftype){
	//this.id = ftype.id;
	this.name = ftype.name;
}

Ftype.addone = function(callback) {
    // FtypeModel.create({
    //     name: '服装'
    // }, function(err, node, numAffected) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("node created and saved: " + node);
    //     }
    // });
}

Ftype.getAll = function(callback) {
    FtypeModel.find(function(err, doc) {
        if (err)
            callback(err);
        else
            callback(null, doc);
    });
}

module.exports = Ftype;