const express = require('express');
const product = require('../model/productdata');    
const user = require('../model/userdata');
const path = require('path')
const fs = require('fs')


module.exports.user = (req,res) =>{
    return res.render('user')
}

module.exports.register = (req,res) =>{
    return res.render('userregister');
}

module.exports.insertuserregister = async(req,res) =>{
    req.body.role = 'user'
    let userdata = await user.create(req.body);
    return res.redirect('back');
}

module.exports.Products =async (req,res)=>{
    let uproduct = await product.find({});

    return res.render('Products',{
        name : uproduct
    })
}

module.exports.addtocart = async (req,res) =>{
   
    return res.render('addtocart');
}

module.exports.login = (req,res) =>{
    return res.render('userlogin'); 
}

module.exports.getlogin = (req,res)=>{
    return res.redirect('/')
}