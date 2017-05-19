/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//Object snippet from initial tweet json object

var tweetData = {

"user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
}

function createTweetElement(obj) {
  var $tweet  = $('<article>');
  var $content= $('<p>');
  var $header = $('<header>');
  var $footer = $('<footer>');
  var $time   = moment(obj.created_at).fromNow();
  $tweet.addClass('tweet');
  $('<img>').addClass('avatar').attr('src', obj.user.avatars.small).appendTo($header);
  $('<h2>').addClass('profileName').text(obj.user.name).appendTo($header);
  $('<p>').addClass('userName').text(obj.user.handle).appendTo($header);
  $('<p>').addClass('tweetContent').text(obj.content.text).appendTo($content);
  $('<p>').text($time).appendTo($footer);
  $tweet.append($header).append($content).append($footer);
return $tweet;

}

$(document).ready(function() {

  var $tweet = createTweetElement(tweetData);
  $('#tweets-container').append($tweet);

  //console.log($tweet);

});

