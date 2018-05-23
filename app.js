// helper functions
const simplifyTimeStamp = timestamp => String(timestamp).split(' ').slice(0,5).join(' ');

// console.log(elapsedTime());

const writeTweets = tweetStream => {
  const $tweetlog = $('#tweet-log');
  $tweetlog.html('');
  tweetStream.forEach((tweet, i) => {
    // const elapsedTime = timestamp => moment.utc(moment(Date.now()) - moment(Date(timestamp))).format("mm:ss.SSS");
    const elapsedTime = timestamp => ((Date.now() - new Date(timestamp)) / 1000).toFixed(2);
    $(`<div class="tweet">
        <div class="username">
          <a class = "userlink" href='javascript:writeTweets(streams.users.${tweet.user})'>@${tweet.user}:</a>
        </div>
        <span class="msg">${tweet.message} </span>
        <span class="idx">(${i + 1}) </span>
        <div class="timestamp">${simplifyTimeStamp(tweet.created_at)}</div>
        <div class="elapsedTime">${elapsedTime(tweet.created_at)} seconds ago </div>
        </div>
        `).prependTo($tweetlog);
        // console.log(tweet.created_at);
      });
    }
    
$(document).ready(() => {
  // load tweets on refresh/startup
  writeTweets(streams.home);

  // load tweets on displayNew Button click
  $('#updateAllBtn').click(() => writeTweets(streams.home));

});
