var socket = require('socket.io');
var twitter = require('twitter');

/*
以下の4つのxxは自分で調べて入力.
https://apps.twitter.com/
*/
var twit = new twitter({
  consumer_key: 'xx',
  consumer_secret: 'xx',
  access_token_key: 'xx',
  access_token_secret: 'xx'
});

function socket(server){
  io = socket.listen(server);
  var current_stream;

  io.on('connection', function(socket){
    socket.on('disconnect', function(){
        console.log('user disconnected');
        current_stream.destroy();
        current_stream = null;
    });

    socket.on('tweet', function(tweet){
      //ツイートする
      twit.post('statuses/update', {status : tweet}, function(err, tw, res){
        console.log ("tweeted");
      });
    });

    socket.on('msg', function(msg){
      twit.get('users/show', params, function(err, tw, res){
        //必要な情報だけクライアント側に送信
        var user_info = {
          id : tw.id,
          name : tw.name,
          s_name : tw.screen_name,
          icon : tw.profile_image_url
        };
        io.emit('msg', user_info);
      });
    });
    
    //(自分がフォローしているユーザの)TLを取得
    twit.stream('user', {}, function(stream) {
      current_stream = stream;
      stream.on('data', function(tweet) {
        if(tweet.user !== undefined){
          socket.emit('tw', tweet);
        }
      });
     
      stream.on('error', function(error) {
        throw error;
      });
    });
    
  });
}

module.exports = socket;