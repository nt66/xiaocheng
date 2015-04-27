var mongoose = require('mongoose');
var dbPath = 'mongodb://localhost/xiaocheng';

mongoose.connect(dbPath);

//连接成功
mongoose.connection.on('connected',function () {
	console.log('mongoose connected to:'+dbPath);
});

//连接失败
mongoose.connection.on('error',function (err) {
	console.log('mongoose connected error:'+err);
});

module.exports = mongoose;