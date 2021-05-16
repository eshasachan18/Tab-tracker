const express = require('express')
const authController = require('./../controllers/authControlllers');
const router = express.Router()

module.exports = router =>{
router.post('/signup',authController.signup);

router.post('/register',(req,res)=>{ 
    res.send({
        message:`hello ${req.body.email}! Your user was registered`
    })
  })
};
//export default router;
