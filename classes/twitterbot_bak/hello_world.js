//hello_world.js

console.log("Hello World");

// key 9xoARTINyoJ0EGrXF99yxR3lD
// secret 90inTWUsaFFysszhXUX02lQxPvvgKxKVhHamnPz7q8Ttlbzb8v
// alannarisse
// owner id 72598775

// token 	72598775-yLznALDKkur0ZHje2KXoOIEfsQEllvshKJzVjOisD
// token secret 	xQk2IcD8XBHnuvq1JNARGtWunPlbpMANg9gJwULhdBYrW


// twitterbot starter code link http://bit.ly/js-twitter-bot-starter 
// takes you to: https://www.dropbox.com/s/j45rk3nwqklunbu/app.js?dl=0


var TwitterPackage = require('twitter');
 
// replace the words in caps with the keys that
// we saw before on apps.twitter.com
var secret = {
  consumer_key: '9xoARTINyoJ0EGrXF99yxR3lD',
  consumer_secret: '90inTWUsaFFysszhXUX02lQxPvvgKxKVhHamnPz7q8Ttlbzb8v',
  access_token_key: '72598775-yLznALDKkur0ZHje2KXoOIEfsQEllvshKJzVjOisD',
  access_token_secret: 'xQk2IcD8XBHnuvq1JNARGtWunPlbpMANg9gJwULhdBYrW'
}
 
var Twitter = new TwitterPackage(secret);
 
var query = "alot";
Twitter.get('search/tweets', {q: query, count: 1, lang:"en"}, function(error, tweets, response) {
    
   var tweet_list = tweets['statuses'];
    
   for (var i = 0; i < tweet_list.length; i++) {
        if ('retweeted_status' in tweet_list[i]) {
            continue;
        } 
        var screen_name = tweet_list[i].user.alannarisse;
        var message = "@" + screen_name + " Alot confused, a lot not understand feelings";
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