var express = require('express');
var router = express.Router();

var Dashboard = require('../models/dashboard');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	var SessionUser = req.session;
	res.render('dashboard', {
		"userid": SessionUser.passport.user
	});
	console.log(SessionUser);
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

module.exports = router;