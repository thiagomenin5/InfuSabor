var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Login' });
});


router.get('/register', function(req, res, next) {
  res.render('users/register', { title: 'Register' });
});

router.get('/cart', function(req,res,next){
  res.render('users/cart',{ title: 'cart' })
})

module.exports = router;
