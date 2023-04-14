const passport = require('passport')
const passlocal = require('passport-local').Strategy;

const user = require('../model/userdata');

passport.use( 'userLogin',new passlocal({
    usernameField : 'email' 
}, async (email,password,done)=>{
    let userdata = await user.findOne({email:email})
    if(!userdata || userdata.password != password){
        console.log('somthing went wrong !!')
        return done(null,false)
    }
    return done(null,userdata)
}))

passport.CheckAuth = (req,res,next)=>{

    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/login')
}


module.exports = passport;