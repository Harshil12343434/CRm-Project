const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
    CategoryID :{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    ProductID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    },
    quantity : {
        type : Number ,
        required : true
    },
    active: {
        type: Boolean,
        require: true,
    },

})
 

const stock = mongoose.model('Stock',StockSchema);

module.exports = stock;