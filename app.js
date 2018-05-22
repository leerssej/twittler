$(document).ready(function(){
  const $tweetlog = $('#tweet-log');
  let lastIndexLoaded = 11; // accounting for the first ten always getting loaded

  console.log(streams.home.length);
  let index = streams.home.length - 1;
  while(index >= 0){
    let tweet = streams.home[index];
    let $tweet = $('<div>' +
      '<a class="username"></a>' +
      '<a class="msg"></a>' +
      '<a class="idx"></a>' +
      '<a class="timestamp"></a>' +
    '</div>');
    $tweet.children('.username').text(`@${tweet.user} `);
    $tweet.children('.msg').text(`: ${tweet.message} `);
    $tweet.children('.idx').text(`(${index + 1}) `);
    $tweet.children('.timestamp').text(`- (${tweet.created_at})`);
    $tweet.prependTo($tweetlog);
    index -= 1;
  }

  const updateTweets = function() {
    let indexToLoad = lastIndexLoaded;
    lastIndexLoaded = streams.home.length; // this is preemptive for when loop is finished
    while(indexToLoad < lastIndexLoaded) {
      let tweet = streams.home[indexToLoad];
      let $tweet = $('<div></div>');
      $tweet.text(`@ ${tweet.user}: ${tweet.message} - ${tweet.created_at}`);
      $tweet.prependTo($tweetlog);
      indexToLoad += 1;
    }
  }

  // on button click
  $('#displayNewBtn').click(function() {
    updateTweets();
  });


});