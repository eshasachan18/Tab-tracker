const express = require('express')
const mongoose = require('mongoose')

const User = import('./../models/userModel');
const catchAsync= require('./../utils/catchAsync')

exports.signup = async(req,res,next) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data : {
                user: newUser
            }
        });
    }catch(err) {
        res.status(404).json({ message: error.message });
    }
   
}; 

