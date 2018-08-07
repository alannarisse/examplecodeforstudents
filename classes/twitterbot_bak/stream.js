var TwitterPackage = require('twitter');
 
// replace the words in caps with the keys that
// we saw before on apps.twitter.com

// to move api keys to a config file. 
// var secret = require('./config');

var secret = {
  consumer_key: '5sb6AQRkiKbgCUND4AhEMhM9E',
  consumer_secret: 'I40uoy3GnbeO2C0ZpIy7abEBQR8ex1Yf9rFhfC2B1PixJntLGd',
  access_token_key: '1011486921585881088-emNcrBIzjZ2yE36VNFzoGUzRx0lo9C',
  access_token_secret: 'ag7oYMet4Dg5EWSPpkXrZlQtJUBZROGrcXPuevGLHdcH2'
}

var Twitter = new TwitterPackage(secret);

var stream = Twitter.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log("listening for javascript tweets. press control + C to end stream.");
  console.log(event && event.text);
});

stream.on('error', function(error) {
  throw error;
});