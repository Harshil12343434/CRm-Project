const express = require('express');
const route = express.Router();

const orderdata = require('../controller/ordercontroller');

route.get('/addorder',orderdata.addorder);

route.post('/Insertorderdata',orderdata.Insertorderdata);

route.get('/vieworder',orderdata.vieworder);

module.exports = route;