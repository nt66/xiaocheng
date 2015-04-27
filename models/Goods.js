var mongoose = require('../mongodb');
var Schema = mongoose.Schema;
var GoodsSchema = new Schema({
    name: String,
    cID: Schema.Types.ObjectId,
    color:[String],
    size:[String],
    price:Number,
    dscrip:String,
    detailImg:String,
    img:String
});

var GoodsModel = mongoose.model('Goods', GoodsSchema, 'Goods'); //最后一个参数是你想要保存的集合名,默认是复数

function Goods(Goods) {
    this.id = Goods.id;
    this.name = Goods.name;
    this.cID = Goods.cID;
    this.color = Goods.color;
    this.price = Goods.price;
    this.dscrip = Goods.dscrip;
    this.detailImg = Goods.detailImg;
    this.img = Goods.img;
    this.isUsed = Goods.isUsed;
}

var datas = [{name:'凡客T恤 顾湘',cID:'553b2390bd2864ed02621df1',color:['black','white'],size:['s','M','XL'],price:59,dscrip:'顾湘，作家，艺术家，13岁便有文章付梓，从此一发不可收，时有文字、随笔见诸于报端；她最喜欢的就是猫，更中意轻盈、魔幻一些的风格，就像她笔下那些猫一样。“有一天我想，假如猫也在夜幕下跳广场舞会是怎么个情景。"',detailImg:'',img:'150425'}];

/*批量添加数据*/
Goods.addBath = function(callback) {
    GoodsModel.create(datas,function(err, node, numAffected) {
        if (err) {
            callback(err)
        } else {
            callback(null,node);
        }
    })
}

/*添加单条*/
Goods.addone = function(callback) {
    // GoodsModel.create({
    //     name: '服装'
    // }, function(err, node, numAffected) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("node created and saved: " + node);
    //     }
    // });
}

/*更新*/
Goods.update = function(callback) {
    // GoodsModel.update({fID:'553a41f0a7ec27c7018a24ec'
    // }, {
    //     $set: {
    //         fID: '553af9415d449cd801e358c8'
    //     }
    // }, function(err, doc) {
    //     if (err)
    //         callback(err);
    //     else
    //         callback(null, doc);
    // });
}

/*获取*/
Goods.getAll = function(callback) {
    GoodsModel.find(function(err, doc) {
        if (err)
            callback(err);
        else
            callback(null, doc);
    });
}

module.exports = Goods;