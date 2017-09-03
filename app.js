var twitter = require('twitter');

var bot = new twitter({
	consumer_key		:'bCGBXS9x3bna0KI8dZ4t0YgIG',
	consumer_secret		:'6kW3WfSM6TrkJTF8WYqWfJ3XD3vXTiXuYXuW13K8XSGrjTfI5B',
	access_token_key	:'855700274-8W2CuvSdWAw8a4AgePJPGULFdkrvr8IAsdAJ9XAF',
	access_token_secret	:'6XbnA3WgowRnUo9gtex3QzkRBkzW6Zhl5FRrrpSzvyG9v'
});

bot.updateStatus('bot用のテストです', function(data){
	console.log(data);
})