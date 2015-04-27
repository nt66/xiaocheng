var mongoose = require('../mongodb');
var Schema = mongoose.Schema;

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