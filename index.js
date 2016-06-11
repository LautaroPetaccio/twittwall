var io = require('socket.io')(8000);
var Twitter = require('twitter');
var opener = require('opener');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

io.on('connection', function(socket){
  var twitter_stream = null;
  socket.on('search_hashtag', function (hashtag) {

    client.stream('statuses/filter', {track: hashtag},  function(stream) {
      if(twitter_stream)
        twitter_stream.destroy();

      stream.on('data', function(tweet) {
        socket.emit('new_twitt', tweet);
      });

      stream.on('error', function(error) {
        console.log(error);
      });

      twitter_stream = stream;

    });

  });

  socket.on('disconnect', function() {
    if(twitter_stream)
      twitter_stream.destroy();
    console.log('Destroyed twitter_stream');
  });
});

opener("./index.html");