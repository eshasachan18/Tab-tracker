const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt= require('bcryptjs');
console.log('inside model');

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true,'tell your name']
      },
      Business_model: {
        type: String,
        enum: ['Farm Producer', 'Transporter', 'Product Producer', 'Product Supplier','Wholesaler','Product distributor','Retailer','Consumer'],
        required : true 
    },
      Organisation: {
        type: String,
       required: [true,'tell your organisation']
      },
      Phone_number:{
        type:String,
        required: [true,'tell your phone number']
      },

      email: {
        type: String,
        required: [true,'Write your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,'please provide a valid email']
      },
      password: {
          type: String,
          required: [true,'password is mandatory']
      },
      passwordConfirm: {
        type: String,
        required: [true,'please confirm your password'],
        validate: {
          validator: function(el){
            return el==this.password;
          },
          message: 'passwords are not same!'
        }
       
      }
    },
    { collection: 'users3' }
  );

  userSchema.pre('save',async function(next){
    if(!this.isModified('password'))return next();
    this.password=await bcrypt.hash(this.password,12);
    this.passwordConfirm=undefined;
    next();
  })
  
  var User= mongoose.model('Users',userSchema);
  module.exports = User;