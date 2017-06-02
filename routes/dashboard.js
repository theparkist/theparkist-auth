var express = require('express');
var router = express.Router();

var User = require('../models/dashboard');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('dashboard');
});



router.get('/dashboard', function(req, res){
	res.flash('test', result);
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

module.exports = router;