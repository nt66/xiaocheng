var express = require('express');
var Ftype = require('../models/Ftype');
var Ctype = require('../models/Ctype');
var Goods = require('../models/Goods');
var router = express.Router();

/* GET home page. */
router.get('', function(req, res) {
    res.redirect('/main.html');
})
router.get('/', function(req, res) {
    res.redirect('/main.html');
})
router.get('/main.html', function(req, res, next) {
    var user = req.session.user;
    if (user)
        res.render('main', {
            userName: user.name
        });
    else
        res.render('main', {
            userName: ''
        });
});

/* filter page. */
/*更新数据*/
// router.get('/update', function(req, res) {
//     Ctype.update(function(err,updateList){
//         console.log(updateList);
//     })
// })
// 

/*添加模拟数据*/
// router.get('/addbath', function(req, res) {
//     Ctype.addBath(function(err,doc){
//         res.send(doc);
//     })
// })

/*添加商品模拟数据*/
router.get('/addgoods', function(req, res) {
    Goods.addBath(function(err,doc){
        res.send(doc);
    })
})

router.get('/filter.html', function(req, res) {
    //获取用户session
    var user = req.session.user;
    var name = user ? user.name : '';
    //回调嵌套
    Ftype.getAll(function(err, ftype) {
        Ctype.getAll(function(err, ctype) {
            Goods.getAll(function(err,goods){
                res.render('filter', {
                userName:name,
                ftype: ftype,
                ctype: ctype,
                goods:goods
            });
            });
        });
    });
});



module.exports = router;