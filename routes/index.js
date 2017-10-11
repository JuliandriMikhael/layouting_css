var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next){
  res.render('about', {title: 'About' });
})

router.get('/help', function(req, res, next) {
  res.render('help', {title: 'Help'})
})

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'})
})

router.get('/peta', function(req, res, next) {
  res.render('peta', {title: 'Peta'})
})

router.get('/regulation', function(req, res, next) {
  res.render('regulation', {title: 'Regulation'})
})

module.exports = router;
