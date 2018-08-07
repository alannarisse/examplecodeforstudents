// my supercalifragilisticexpialidocious twitter bot
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

var query = "supercalifragilisticexpialidocious";
Twitter.get('search/tweets', {q: query, count: 2, lang:"en"}, function(error, tweets, response) {

// https://css-tricks.com/snippets/javascript/select-random-item-array/
  var myMessages = [
    " Even though the sound of it is something quite attrocious.",
    " If you say it loud enough, you'll always sound precocious",
    " Now, you can say it backwards, which is docious-ali-expi-listic-fragi-cali-rupus",
    " When the cat has got your tongue, there's no need for dismay",
    " Better use it carefully, or it could change your life",
    " Um diddle diddle, diddle um, diddle ay"
  ];
  var randomMessage = myMessages[Math.floor(Math.random()*myMessages.length)];

   var tweet_list = tweets['statuses'];
    //console.log(tweets);
   for (var i = 0; i < tweet_list.length; i++) {
        if ('retweeted_status' in tweet_list[i]) {
                  console.log(tweet_list[i].text);
            continue;
        }
        var screen_name = tweet_list[i].user.screen_name;
        var message = "@" + screen_name + randomMessage;
        var tweet_id = tweet_list[i].id_str

        try {
            Twitter.post('statuses/update', {"status": message, "in_reply_to_status_id":tweet_id}, function(error, tweet, response){
                 console.log("Tweet posted successfully!")
            });

            // var tweet = { status: "hello from my node server!"};
            // Twitter.post ('statuses/update', tweet, tweeted);
            // function tweeted(error, tweet, response){
            //   if(error){
            //     console.log("something went wrong");
            //   } else {
            //     console.log("yay, I tweeted");
            //   }
            //}


        }

        catch(err) {
            console.log(err);
        }
   }
});
