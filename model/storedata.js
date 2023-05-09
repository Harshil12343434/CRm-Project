const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
   
    name : {
        type : String ,
        required : true
    },
    phone : { 
        type : String,
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