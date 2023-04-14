const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    ProductID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    },
    name : {
        type : String ,
        required : true
    },
    phone : { 
        type : Number,
        required : true,
    },
    email : { 
        type : String,
        required : true
    },
    adress:{
        type : String,
        required : true 
    },
    city :{
        type : String,
        required : true
    }

})
 

const store = mongoose.model('Store',storeSchema);

module.exports = store;