const mongoose = require('mongoose');
const multer = require('multer')
const imagepath = '/img/admins';
const path = require('path')

const AdminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
      
    },
    phone : {
        type : String,
        required : true
      
    },
    avatar :{
        type : String,
        required : true
    },
    role :{
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
AdminSchema.statics.uploadphoto = multer({storage:storagee}).single('avatar');
AdminSchema.statics.imgpath = imagepath

const Admin = mongoose.model('Admin',AdminSchema);

module.exports = Admin;