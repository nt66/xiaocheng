var crypto = require('crypto');
var mongoose = require('mongoose');
var dbPath = 'mongodb://localhost/xiaocheng';
var Schema = mongoose.Schema;

mongoose.connect(dbPath);

//连接成功
mongoose.connection.on('connected',function () {
	console.log('mongoose connected to:'+dbPath);
});

//连接失败
mongoose.connection.on('error',function () {
	console.log('mongoose connected error:'+dbPath);
});

var userSchema = new Schema({
	name:String,
	pwd:String
});

var userModel = mongoose.model('user', userSchema,'user');//最后一个参数是你想要保存的集合名,默认是复数


function User(user){
	this.id = user.id;
	this.name = user.name;
	this.pwd = user.pwd;
}

User.get=function(name,callback){
	//姓名查找
	userModel.findByName('david',function(err,doc) {
		if(err)
			return callback(err);
		else
			return callback(doc.name,doc.pwd);
	});
	return callback('无法找到该用户');
}
