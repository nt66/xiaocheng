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
mongoose.connection.on('error',function (err) {
	console.log('mongoose connected error:'+err);
});

var userSchema = new Schema({
	name:String,
	pwd:String
});

//添加静态方法findByName
userSchema.static('findByName', function (name, callback) {
  return this.find({ name: name }, callback);
});

var userModel = mongoose.model('user', userSchema,'user');//最后一个参数是你想要保存的集合名,默认是复数


function User(user){
	this.id = user.id;
	this.name = user.name;
	this.pwd = user.pwd;
}

User.get=function(name,callback){
	//姓名查找
	userModel.findByName(name,function(err,doc){
		if(err)
			return callback(err);
		else
			return callback(null,doc[0]);
	});
}

User.prototype.addOne = function(callback){
	var userObj = {
		name:this.name,
		pwd:this.pwd
	}
	userModel.create(userObj,function(err,doc) {
		if(err)
			return callback(err);
		else
			return callback(null,doc);
	})
}

module.exports = User;