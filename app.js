'use strict';
var http = require('http');
var express = require('express');
// passport-twitter用
var session = require('express-session')
var auth = require('./passport');
var passport = auth.passport;
// ルーティングファイルを指定
var routes = require('./routes/routes');
var app = express();
var server = http.createServer(app);

// passport-twitter用
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(session({secret: 'itagaki'}));
// 静的ファイルのルートディレクトリを指定
app.use(express.static(__dirname + '/public'));
// ルーティングを設定
routes.configRoutes(app, server, passport);
// リッスン
server.listen(3000);
console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);




// var bot = new twitter({
// 	consumer_key		:'bCGBXS9x3bna0KI8dZ4t0YgIG',
// 	consumer_secret		:'6kW3WfSM6TrkJTF8WYqWfJ3XD3vXTiXuYXuW13K8XSGrjTfI5B',
// 	access_token_key	:'855700274-8W2CuvSdWAw8a4AgePJPGULFdkrvr8IAsdAJ9XAF',
// 	access_token_secret	:'6XbnA3WgowRnUo9gtex3QzkRBkzW6Zhl5FRrrpSzvyG9v'
// });

// bot.updateStatus('bot用のテストです', function(data){
// 	console.log(data);
// })
