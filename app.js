$(document).ready(function(){
  const $tweetlog = $('#tweet-log');
  // $body.html('');
  let lastIndexLoaded = 11; // accounting for the first ten always getting loaded

  console.log(streams.home.length);
  let index = streams.home.length - 1;
  console.log(index);
  while(index >= 0){
    let tweet = streams.home[index];
    let $tweet = $('<div></div>');
    $tweet.text(`@ ${tweet.user}: ${tweet.message} - ${tweet.created_at}`);
    $tweet.prependTo($tweetlog);
    index -= 1;
  }

const updateTweets = function() {
  let indexToLoad = lastIndexLoaded;
  lastIndexLoaded = streams.home.length; // this is preemptive for when loop is finished
  while(indexToLoad < lastIndexLoaded) {
console.log('lastIndexLoaded:', lastIndexLoaded);
console.log('lastIndexLoaded:', lastIndexLoaded);
    let tweet = streams.home[indexToLoad];
    let $tweet = $('<div></div>');
    $tweet.text(`@ ${tweet.user}: ${tweet.message} - ${tweet.created_at}`);
    $tweet.prependTo($tweetlog);
    indexToLoad += 1;
  }
}

// on button click
  $('.buttonContainer button').click(function() {
    //alert('clicked');
    console.log(streams.home.length);
    updateTweets();
  });


});