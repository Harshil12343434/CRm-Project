const express = require('express');
const route = express.Router();
const passport = require('passport')
const admindb = require('../model/admindata')

const admindata = require('../controller/admincontroller')

route.get('/',passport.cheakauthanticate,admindata.dashbord);

route.get('/register',admindata.register);

route.get('/forgot',admindata.forgot);

route.get('/profile',admindata.profile)

// route.get('/profile'.admindata.profile)
route.post('/forgotpass',admindata.forgotpass)

route.post('/otp', admindata.otp);

route.post('/resetpass',admindata.resetpass)

route.post('/signupp',admindata.signupp)

// route.get('/home',passport.cheakauthanticate,admindata.home);

route.get('/addadmin',passport.cheakauthanticate,admindata.addadmin);

route.get('/viewAdmin',passport.cheakauthanticate,admindata.viewadmin)

route.post('/insertAdminData',admindb.uploadphoto,admindata.insertAdminData);

route.get('/Admindeletedata/:id',admindata.Admindeletedata)

route.get('/Adminupdatedata/:id',admindata.Adminupdatedata)

route.post('/insertupdatedata',passport.cheakauthanticate,admindata.insertupdatedata)

route.get('/login',admindata.login);

route.post('/getlogin',passport.authenticate('admin',{failureRedirect:false}),admindata.getlogin)

route.get('/logout',admindata.logout)


route.get('/buyers',admindata.buyers)

route.use('/category',passport.cheakauthanticate,require('./Categoryroute'))

route.use('/product',passport.cheakauthanticate, require('./productroute'));

route.use('/stock',passport.cheakauthanticate,require('./stockroute'));

route.use('/store',passport.cheakauthanticate,require('./storeroute'))





module.exports = route;