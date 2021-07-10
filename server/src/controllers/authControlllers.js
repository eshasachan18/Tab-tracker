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
        const newUser = await User.create(req.body);
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
    }catch(error) {
        res.status(404).json({ message: error.message });
    }
   
};
exports.login=(req,res,next) => {
    const {email,password}= req.body;
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
