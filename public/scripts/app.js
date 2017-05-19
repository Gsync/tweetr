/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Function to generate html elements for tweets using jquery
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
//Render the tweets into the above elements
function renderTweet(tweets) {
    tweets.forEach(function(tweet) {
      var $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    });
}

$(() => {
  function loadTweets() {

    $.ajax( {
      url: '/tweets',
      datatype: 'json',
      method: 'GET',
      success: function(tweetsObj) {
        renderTweet(tweetsObj);
      }
    });
  }

  loadTweets();

  $('#tweetSubmit').on('submit', function(event) {
    if (!($(this.text).val())) {
      alert('Please enter your tweet!');
    }
    if (($(this.text).val().length) > 140) {
      alert('Number of characters in a tweet cannot be more than 140!');
    }
  event.preventDefault();
  //console.log($(this).serialize());
  });

});

