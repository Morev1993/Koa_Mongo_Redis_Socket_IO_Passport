'use strict';

let fbStrategy = require('passport-facebook').Strategy;
let passport = require('koa-passport');

exports.fb = function*(next){

	passport.use(new fbStrategy({
		clientID: '%ID%',
		clientSecret: '%secret%,
		callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/'
	}, function(token, tokenSecret, profile, done) {
		console.log(token, tokenSecret, profile);
		return done(null, user);
	}));

	yield passport.authenticate('facebook', {
		successRedirect: '/',
		failureRedirect: '/'
	});
}
//app id 1642374752707140
//app secret 908e1de0e09a8824b7bc6c9fed80c71f
