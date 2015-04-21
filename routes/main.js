var express = require('express');
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
        res.render('main',{userName:''});
});

module.exports = router;