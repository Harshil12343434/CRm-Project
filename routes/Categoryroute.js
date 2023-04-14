const express = require('express');
const route = express.Router();

const Categorydata = require('../controller/CategoryController');

// route.get('/addcategory',Categorydata.addcategory);

route.get('/addcategorydata',Categorydata.addcategorydata)

route.post('/InsertCdata',Categorydata.InsertCdata)

route.get('/ViewCategory',Categorydata.ViewCategory)

module.exports = route;