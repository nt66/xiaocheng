var express = require('express');
var crypto = require('crypto');
var User = require('../models/Login');
var router = express.Router();

//路由
router.get('/reg.html', function(req, res, next){
  res.render('reg', { title: '注册'});
});

//提交
router.post('/reg.html',function(req,res) {
  	//var pwd = req.body.loginPwd; //crypto.createHash('md5').update(req.body.loginPwd).digest('hex');
  	//var name = req.body.loginName;
	User.get(name,function(err,user){
		if(err)	res.send(err);
		if(user.pwd != pwd || user.length == 0){
			res.render('reg',{validate:'用户名或密码错误'});
		}
		else{
			req.session.user = user;
			res.redirect('/main.html');
		}
	});
});
module.exports = router;