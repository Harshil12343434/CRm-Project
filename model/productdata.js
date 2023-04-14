const mongoose = require('mongoose');
const multer = require('multer')
const imagepath = ('/img/product')
const path = require('path')

const ProductSchema = mongoose.Schema({
    CategoryID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category',
    },
    name : {
        type : String,
        required : true
    },
    year :{
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    avatar : {
        type : String,
        required : true
    }

})

var storagee = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,'..',imagepath))
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now())
    }
})
ProductSchema.statics.uploadphoto = multer({storage:storagee}).single('avatar');
ProductSchema.statics.imgpath = imagepath

const product  = mongoose.model('Product',ProductSchema);

module.exports = product;