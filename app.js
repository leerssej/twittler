$(document).ready(function(){
  const $tweetlog = $('#tweet-log');
  let lastIndexLoaded = 0; 

  const updateTweets = function() {
    let indexToLoad = lastIndexLoaded;
    lastIndexLoaded = streams.home.length; // this is preemptive for when loop is finished
    while(indexToLoad < lastIndexLoaded) {
      let tweet = streams.home[indexToLoad];
      let simpleTimeStamp = String(tweet.created_at).split(' ').slice(0,5).join(' ');
      let $tweet = $(
      '<button class="tweet">' +
        `@${tweet.user}:` +
        // '<div class="username"></div>' +
        // '<span class="msg"></span>' +
        // '<span class="idx"></span>' +
        // '<div class="timestamp"></div>' +
      '</button>');
      // $tweet.children('.username').text(`@${tweet.user}:`);
      // $tweet.children('.msg').text(`${tweet.message} `);
      // $tweet.children('.idx').text(`(${indexToLoad + 1}) `);
      // $tweet.children('.timestamp').text(`${simpleTimeStamp}`);
      $tweet.prependTo($tweetlog);
      indexToLoad += 1;
    }
  }

  // // load tweets on refresh/startup
  updateTweets();
  
  // load tweets on displayNew Button click
  $('#displayNewBtn').on('click', function() {
    updateTweets();
  });

  // // display Button on click of username
  $('.tweet').on('click', function() {
    console.log($(this)/*.children().text().split(':')[0].slice(1)*/);
    // console.log($(this).children().text().split(':')[0].slice(1));
  });
  
  // // // displayUserNameTweets
  // const updateTweetsByUser = function(user) {
  //   let indexToLoad = lastIndexLoaded;
  //   lastIndexLoaded = streams.home.length; // this is preemptive for when loop is finished
  //   while(indexToLoad < lastIndexLoaded) {
  //     let tweet = streams.home[indexToLoad];
  //     let simpleTimeStamp = String(tweet.created_at).split(' ').slice(0,5).join(' ');
  //     let $tweet = $(
  //     '<div class="tweet">' +
  //       '<div class="username"></div>' +
  //       '<span class="msg"></span>' +
  //       '<span class="idx"></span>' +
  //       '<div class="timestamp"></div>' +
  //     '</div>');
  //     $tweet.children('.username').text(`@${tweet.user}`);
  //     $tweet.children('.msg').text(`${tweet.message} `);
  //     $tweet.children('.idx').text(`(${indexToLoad + 1}) `);
  //     $tweet.children('.timestamp').text(`${simpleTimeStamp}`);
  //     $tweet.prependTo($tweetlog);
  //     indexToLoad += 1;
  //   }
  // }
  // let words = [];
  // $('.tweet' ).bind('mouseup', function() {
  //   word = window.getSelection().toString();
  //     if(word != ''){
  //       if( confirm("Add *"+word+"* to array?") ){words.push(word);}
  //     }
  //   });
  
  //   //just to see what we've got
  // $('button').click(function(){alert(words);});
  // });


});


// $(document).ready(function(){
  
// });