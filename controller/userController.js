const express = require('express');
const product = require('../model/productdata');    
const user = require('../model/userdata');
const userbuy = require('../model/userbuy')
const path = require('path')
const fs = require('fs')


module.exports.user = (req,res) =>{
    return res.render('user')
}

module.exports.register = (req,res) =>{
    return res.render('userregister');
}

module.exports.insertuserregister = async(req,res) =>{
    
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


module.exports.buy= async(req,res)=>{
    let data = await userbuy.create(req.body)
    return res.redirect('back');
  
}