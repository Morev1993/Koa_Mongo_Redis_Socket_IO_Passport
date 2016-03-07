'use strict';

let vkStrategy = require('passport-vkontakte').Strategy;
let passport = require('koa-passport');

exports.vk = function*(next){

	passport.use(new vkStrategy({
		clientID: '%ID%',
		clientSecret: '%secret%',
		callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/'
	}, function(token, tokenSecret, profile, done) {
		console.log(token);
		console.log(tokenSecret);
		console.log(profile);
		return done(null, user);
	}));

	yield passport.authenticate('vkontakte', {
		successRedirect: '/',
		failureRedirect: '/'
	});
}
//app id 5287048
//app secret hXcDNqDEBE1GJxTSE7Ug
