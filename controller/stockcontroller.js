const express = require('express');
const stock = require('../model/stockdata')
const product = require('../model/productdata');
const category = require('../model/Categorydata');


module.exports.addstock = async (req,res)=>{
    let stock = await category.find({});
    return res.render('addstock',{
        data : stock
    })
}

module.exports.category = async (req,res) =>{
    let data = await product.find({CategoryID : req.body.CategoryID});
    console.log(data)
    return res.render('option',{
        data : data
    })
}

module.exports.insertstockdata = async (req,res) =>{
    // console.log(req.body)
    (req.body.active = true);
    

    let stockdata = await stock.create(req.body);
    return res.redirect('back');
}

module.exports.viewstock = async(req,res) =>{
    let sdata = await stock.find({}).populate('CategoryID').populate('ProductID');
    return res.render('viewstock',{
        data :sdata,
    })
}

module.exports.deactive = async (req,res)=>{
    let deactive = await stock.findByIdAndUpdate(req.params.id, {active : false});
    
    return res.redirect('back')
}
module.exports.active = async (req,res)=>{
    let active = await stock.findByIdAndUpdate(req.params.id, {active : true})

    return res.redirect('back')
}