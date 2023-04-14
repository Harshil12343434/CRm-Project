const passport = require('passport')
const passlocal = require('passport-local').Strategy;
const user = require('../model/userdata')
const admin = require('../model/admindata');

passport.use( 'admin', new passlocal({
    usernameField : 'email' 
}, async (email,password,done)=>{
    let admina = await admin.findOne({email:email})
    if(!admina || admina.password != password){
        console.log('somthing went wrong !!')
        return done(null,false)
    }
    return done(null,admina)
}))

passport.serializeUser((user,done)=>{
    done(null,user.id)
   

    // if()
})

passport.deserializeUser(async (id,done)=>{
    let admina = await admin.findById(id);
    // console.log(admina)
    // let userda = await user.findById(id);

    // if(admina.role == 'admin')
    // {
    //     return done(null,admina)
    // }
    // else if(userda.role == 'user')
    // {
    //     return done(null,userda) 
    // }
    if(!admina)
    {
        // console.log('123')
        let data = await user.findById(id)
        return done(null,data)
    }
        return done(null,admina)
    // done(null,false)
})
passport.cheakauthanticate = (req,res,next)=>{


    if(req.isAuthenticated())
    {
            next();

    }
    return res.redirect('/admin/login')

}

passport.setprofile = (req,res,next)=>{
        res.locals.user = req.user;
    // console.log(req.user)
    next();
}
module.exports = passport;