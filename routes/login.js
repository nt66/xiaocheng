var express = require('express');
var crypto = require('crypto');
var User = require('../models/Login');
var router = express.Router();

//登陆路由
router.get('/login.html', function(req, res) {
    res.render('login', {
        title: '登陆',
        validate: ''
    });
});

//登陆提交
router.post('/login.html', function(req, res) {
    var pwd = crypto.createHash('md5').update(req.body.loginPwd).digest('hex');
    var name = req.body.loginName;
    User.get(name, function(err, user) {
        if (err) res.send(err);
        if (user.pwd != pwd || user.length == 0) {
            res.render('login', {
                validate: '用户名或密码错误'
            });
        } else {
            req.session.user = user;
            res.redirect('/main.html');
        }
    });
});

//注册路由
router.get('/reg.html', function(req, res) {
    res.render('reg', {
        title: '注册'
    });
});
//注册提交
router.post('/reg.html', function(req, res) {
    var name = req.body.loginName;
    var pwd = crypto.createHash('md5').update(req.body.loginPwd).digest('hex');
    var item = {
        name: name,
        pwd: pwd
    }
    var user = new User(item);
    user.addOne(function(err, user) {
        if (err) res.send(err);
        console.log('注册成功' + user);
        req.session.user = user;
        res.redirect('/main.html');
    })
})

module.exports = router;