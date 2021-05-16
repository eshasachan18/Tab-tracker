const express = require('express')
const mongoose = require('mongoose')

const User = require('./../models/userModel')
const catchAsync= require('./../utils/catchAsync')

exports.signup = async(req,res,next) => {
    try{
        console.log('inside controller');
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data : {
                User: newUser
            }
        });
    }catch(err) {
        res.status(404).json({ message: error.message });
    }
   
}; 

