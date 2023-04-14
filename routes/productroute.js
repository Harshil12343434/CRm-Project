const express = require('express');
const route = express.Router();
const productdb = require('../model/productdata')
const productdata = require('../controller/productController');

route.get('/addproduct',productdata.addproduct);

route.post('/InsertPdata',productdb.uploadphoto,productdata.InsertPdata);

route.get('/viewproduct',productdata.viewproduct);



module.exports = route;