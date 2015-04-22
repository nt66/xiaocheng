var express = require('express');
var router = express.Router();

router.get('/filter.html', function(req, res) {
    res.render('filter',{title:'商品分类'});
});

module.exports = router;
