var express = require('express');
var crypto = require('crypto');
var User = require('../models/Login');
var router = express.Router();

//路由
router.get('/login.html', function(req, res, next){
  res.render('login', { title: '登陆',validate:''});
});

//提交
router.post('/login.html',function(req,res) {
  	var pwd = req.body.loginPwd; //crypto.createHash('md5').update(req.body.loginPwd).digest('hex');
	User.get(req.body.loginName,function(err,user){
		if(err)	res.send(err);
		if(user.pwd != pwd || user.length == 0) res.render('login',{validate:'用户名或密码错误'});
	});
});
module.exports = router;