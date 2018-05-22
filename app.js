$(document).ready(function(){
  const $tweetlog = $('#tweet-log');
  // $body.html('');

  console.log(streams.home.length);
  let index = streams.home.length - 1;
  console.log(index);
  while(index >= 0){
    let tweet = streams.home[index];
    let $tweet = $('<div></div>');
    $tweet.text(`@ ${tweet.user}: ${tweet.message} - ${tweet.created_at}`);
    $tweet.appendTo($tweetlog);
    index -= 1;
  }

// on button click
  console.log(streams.home.length);

  // let index = streams.home.length - 1;
  // console.log(index);
  // while(index >= 0){
  //   let tweet = streams.home[index];
  //   let $tweet = $('<div></div>');
  //   $tweet.text(`@ ${tweet.user}: ${tweet.message}`);
  //   $tweet.appendTo($body);
  //   index -= 1;
  // }

});