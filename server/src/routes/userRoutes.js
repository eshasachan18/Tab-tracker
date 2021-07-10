const express = require('express')
const ejs = require('ejs');
const authController = require('./../controllers/authControlllers');
const router = express.Router()
console.log('inside route');
module.exports = router =>{
router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.get('/signup',(req, res)=>{
  res.render('register');
})

router.post('/register',(req,res)=>{ 
    res.send({
        message:`hello ${req.body.email}! Your user was registered`
    })
  })
};
//export default router;
