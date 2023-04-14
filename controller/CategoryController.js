const express = require('express');
const category = require('../model/Categorydata');
const admindb = require('../model/admindata');

// module.exports.addcategory = async (req,res) =>{

//     return res.render('AddCategory');
// }

module.exports.addcategorydata = async (req,res) =>{
    let admin = await admindb.find({});
    return res.render('AddCategory',{
        data : admin
    })
}

module.exports.InsertCdata = async (req,res) =>{
    let Cdata = await category.create(req.body);
    
    return res.redirect('back');
}

module.exports.ViewCategory = async(req,res)=>{
    let data = await category.find({}).populate('adminID').exec();
    return res.render('ViewCategory',{
        name : data,
    })
}


