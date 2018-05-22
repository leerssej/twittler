$(document).ready(function(){
  const $tweetlog = $('#tweet-log');
  let lastIndexLoaded = 0; 
  
  const updateTweets = function() {
    let indexToLoad = lastIndexLoaded;
    lastIndexLoaded = streams.home.length; // this is preemptive for when loop is finished
    while(indexToLoad < lastIndexLoaded) {
      let tweet = streams.home[indexToLoad];
      let $tweet = $(
      '<div class="tweet">' +
        '<div class="username"></div>' +
        '<span class="msg"></span>' +
        '<span class="idx"></span>' +
        '<div class="timestamp"></div>' +
      '</div>');
      $tweet.children('.username').text(`@${tweet.user}:`);
      $tweet.children('.msg').text(`${tweet.message} `);
      $tweet.children('.idx').text(`(${indexToLoad + 1}) `);
      $tweet.children('.timestamp').text(`- (${tweet.created_at})`);
      $tweet.prependTo($tweetlog);
      indexToLoad += 1;
    }
  }

  // load tweets on refresh/startup
  updateTweets()

  // load tweets on displayNew Button click
  $('#displayNewBtn').click(function() {
    updateTweets();
  });


});