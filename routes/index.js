const express = require('express');
const route = express.Router();
const passport = require('passport')

const userc = require('../controller/userController')
route.get('/',passport.CheckAuth,userc.user)

route.get('/register',userc.register);

route.post('/insertuserregister',userc.insertuserregister);

route.get('/login',userc.login);

route.get('/Products',userc.Products)

route.get('/addtocart/:id', userc.addtocart)

route.post('/getlogin',passport.authenticate('userLogin',{failureRedirect:'/login'}), userc.getlogin);

route.use('/admin',require('./admin'))



module.exports = route;