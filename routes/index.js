const express = require('express');

const router = express.Router();
console.log('router loaded');
router.use('/users',require('./users'));

router.get('/', function(req, res){
    
    return res.render('user_sign_in');
});
router.get('/contact',(req,res)=>{
    res.render('Contact');
});

module.exports = router;