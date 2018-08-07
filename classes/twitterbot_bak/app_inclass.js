

var TwitterPackage = require('twitter');

// replace the words in caps with the keys that
// we saw before on apps.twitter.com
var secret = {
  consumer_key: '5sb6AQRkiKbgCUND4AhEMhM9E',
  consumer_secret: 'I40uoy3GnbeO2C0ZpIy7abEBQR8ex1Yf9rFhfC2B1PixJntLGd',
  access_token_key: '1011486921585881088-emNcrBIzjZ2yE36VNFzoGUzRx0lo9C',
  access_token_secret: 'ag7oYMet4Dg5EWSPpkXrZlQtJUBZROGrcXPuevGLHdcH2'
}

var Twitter = new TwitterPackage(secret);

var query = "hedgehogs";


Twitter.get('search/tweets', {q: query, count: 1, lang:"en"}, function(error, tweets, response) {

  var tweet_list = tweets['statuses'];


   for (var i = 0; i < tweet_list.length; i++) {
        if ('retweeted_status' in tweet_list[i]) {
            continue;
        }
        var screen_name = tweet_list[i].user.screen_name;
        var message = "@" + screen_name + " Even though the sound of it is something quite attrocious.";
        var tweet_id = tweet_list[i].id_str

        try {
            Twitter.post('statuses/update', {"status": message, "in_reply_to_status_id":tweet_id}, function(error, tweet, response){
                 console.log("Tweet posted successfully!")
            });
        }

        catch(err) {
            console.log(err);
        }
   }
});
