// helper functions
const simplifyTimeStamp = timestamp => String(timestamp).split(' ').slice(0,5).join(' ');

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
  });
}

$(document).ready(() => {
  // load tweets on refresh/startup
  writeTweets(streams.home);
  
  // load tweets on displayNew Button click
  $('#updateAllBtn').click(() => writeTweets(streams.home));
});
