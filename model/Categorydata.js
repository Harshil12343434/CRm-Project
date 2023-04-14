const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    adminID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Admin',
        required : true
    },
    category : {
        type : String,
        required : true
    }
})
 

const category = mongoose.model('category',CategorySchema);

module.exports = category;