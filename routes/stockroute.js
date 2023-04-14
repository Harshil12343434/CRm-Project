const express = require('express');
const route = express.Router();

const stockdata = require('../controller/stockcontroller');

route.get('/addstock',stockdata.addstock);

route.post('/category', stockdata.category);

route.post('/insertstockdata',stockdata.insertstockdata);

route.get('/viewstock',stockdata.viewstock);

route.get('/deactive/:id',stockdata.deactive);

route.get('/active/:id',stockdata.active);

module.exports = route;
