const express = require ('express');

const product = require('../model/productdata');
const store = require('../model/storedata');

module.exports.addstore = async (req,res)=>{
    let data = await store.find({})
    return res.render('addstore',{
        data : data,
    });
}

module.exports.insertstoreData = async (req,res)=>{
    
    let data = await store.create(req.body) ;
    return res.redirect('back');
}

module.exports.viewstore = async (req,res) =>{
    let data = await store.find({})
    return res.render('viewstore',{
        data : data
    })
}