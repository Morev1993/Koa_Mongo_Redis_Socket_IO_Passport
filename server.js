'use strict';
// A "closer to real-life" app example
// using 3rd party middleware modules
// P.S. MWs calls be refactored in many files

// long stack trace (+clarify from co) if needed
if (process.env.TRACE) {
  require('./libs/trace');
}

const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
let ipaddress = process.env.OPENSHIFT_NODEJS_IP;

//console.log(port, ipaddress);

var config = require('config');
var koa = require('koa');
var app = koa();


var mongoose = require('./libs/mongoose');

// keys for in-koa KeyGrip cookie signing (used in session, maybe other modules)
app.keys = config.keys;

var path = require('path');
var fs = require('fs');
var middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function(middleware) {
  app.use(require('./middlewares/' + middleware));
});

// ---------------------------------------

// can be split into files too
var Router = require('koa-router');

var router = new Router();

router.get('/', require('./routes/frontpage').get);
router.post('/login', require('./routes/login').post);
router.post('/logout', require('./routes/logout').post);
router.get('/', require('./routes/login').post);

router.get('/register', function*(){
	this.body = this.render('register')
});
router.get('/fb', require('./auth/facebook').fb);
router.get('/vk', require('./auth/vk').vk);
router.get('api/login', function*(){
	console.log()
});

app.use(router.routes());

var socket = require('./libs/socket');
var server = app.listen(port, ipaddress);
// var server = require('http').Server(app.callback());
socket(server);

// socket(server);

// server.listen(port,ipaddress)
