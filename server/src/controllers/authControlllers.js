const express = require('express')
const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')
const AppError=require('./../utils/appError')

require("dotenv").config();

const User = require('./../models/userModel')
const catchAsync= require('./../utils/catchAsync')


exports.signup = async(req,res,next) => {
    try{
        console.log('inside controller');
        // const newUser = await User.create(req.body);
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            Organisation: req.body.Organisation,
            Phone_number: req.body.Phone_number,
            Business_model: req.body.Business_model,
          });



        console.log(await req.body.email);
        const token=jwt.sign({id:newUser._id},""+ process.env.JWT_SECRET,{
           // expiresIn:process.env.JWT_EXPIRES_IN
        })


        res.status(201).json({
            status: 'success',
            token,
            data : {
                User: newUser
            }
        });
        return res.redirect('success');
    }catch(error) {
        res.status(404).json({ message: error.message });
    }
   
};
exports.login=(req,res,next) => {
    // const {email,password}= req.body;
    const email = req.body.email;
    const password = req.body.password;
//check if email amd password exist
    if(!email || !password)
    {return next(new AppError('please provide email or password!',400));}
    
    //check password and stored one matcher

    //send the token to client
    const token ='';
    res.status(200).json({
        status: 'success',
        token
    });

}; 
