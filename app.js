// helper functions
const simplifyTimeStamp = timestamp => String(timestamp).split(' ').slice(0,5).join(' ');

const elapsedTime = timestamp => new Date() - Date(timestamp).getTime();
// console.log(elapsedTime('11 13 2018'));

const writeTweets = tweetStream => {
  const $tweetlog = $('#tweet-log');
  $tweetlog.html('');
  tweetStream.forEach((tweet, i) => {
    $(`<div class="tweet">
        <div class="username">
          <a class = "userlink" href='javascript:writeTweets(streams.users.${tweet.user})'>@${tweet.user}:</a>
        </div>
        <span class="msg">${tweet.message} </span>
        <span class="idx">(${i + 1}) </span>
        <div class="timestamp">${ simplifyTimeStamp(tweet.created_at) }</div>
      </div>
    `).prependTo($tweetlog);
    // console.log(tweet.created_at);
  });
}

// Hide User Input form field on page load

// User clicks 'Add Twittle' Button and shows hidden form input



$(document).ready(() => {
  // load tweets on refresh/startup
  writeTweets(streams.home);

  // load tweets on displayNew Button click
  $('#updateAllBtn').click(() => writeTweets(streams.home));
  
// hide user input form field on load
  const $formContainer = $('.form-container');
  const $addTwittle = $('#addTwittBtn');
  $('.form-container').hide();
  $('span.cancel-text').addClass('off');
  $addTwittle.click(function() {
    $(this).addClass('open');
    $formContainer.slideDown(500, function(){
      $('span.add-text').addClass('off');
      $('span.cancel-text').removeClass('off');
    });
  });
  $('#addTwittBtn.open').click(function() {
    $formContainer.slideUp(500, function(){
      $('span.add-text').removeClass('off');
      $('span.cancel-text').addClass('off');
    });
  });



});
