const mongoose = require('mongoose');

const BuySchema = mongoose.Schema({
    ProductID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    },
    UserID :{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    adress : {
        type : String,
        require : true
    },
    state : {
        type : String,
        require : true
    },
    postcode : {
        type : String,
        require : true
    }



})
 

const buy = mongoose.model('Buy',BuySchema);

module.exports = buy;