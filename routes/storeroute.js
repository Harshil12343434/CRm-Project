const express = require('express');
const route = express.Router();
const storefundata = require('../controller/storecontroller')

route.get('/addstore',storefundata.addstore);

route.post('/insertstoreData',storefundata.insertstoreData)

route.get('/viewstore',storefundata.viewstore);
module.exports = route;