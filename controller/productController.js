const express = require('express');

const product = require('../model/productdata');

const category = require('../model/Categorydata');
const path = require('path')
const fs = require('fs')

module.exports.addproduct = async (req,res)=>{
    let product = await category.find({});
    
    return res.render('addproduct',{
        data : product 
    })

}

module.exports.InsertPdata = async(req,res)=>{
    // let pro = await product.create(req.body);
    // return res.redirect('back');
    if(req.file){
        req.body.avatar = product.imgpath+'/'+req.file.filename
    }
    let productdata = await product.create(req.body)
    return res.redirect('back')
    
    
}

module.exports.viewproduct = async(req,res)=>{

    let search = '';
    let page = 1 ; 

    let perpage = 4 ;
    if(req.query.search){
        search = req.query.search;
    }
    if(req.query.page){
        page = req.query.page
    }
    let pagination = await product.find({
             $or : [
            {name : {$regex : '.*'+search+'.*'}}
        ]
    }).skip((page-1 )*4).limit(perpage).populate('CategoryID').exec()
    let pdata = await product.find({
        // $or : [
        //     {name : {$regex : '.*'+search+'.*'}}
        // ]
    }).countDocuments()
    let count = Math.ceil(pdata/perpage)
    return res.render('viewproduct',{
        name : pagination,
        page : count,
        search : search,
    
    })
}



