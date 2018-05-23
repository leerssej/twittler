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
          <div class="images">
            <img src="images/${tweet.user}.jpg">
          </div>
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
  
  // set helper variables
  const $formContainer = $('.form-container');
  const $addTwittle = $('#addTwittBtn');
  const $formInputField = $('.user-input');
  const $formSubmitBtn = $('twitt-add');

  
  // hide user input form field on load
  $('.form-container').hide();
  $('span.cancel-text').addClass('off');
  
  // check to see if open? show formfield 
  $addTwittle.click(function() {
    if ( !$(this).hasClass('open') ) {
      $(this).addClass('open');
      $formContainer.slideDown(500, function(){
        $('span.add-text').addClass('off');
        $('span.cancel-text').removeClass('off');
      });
    } else {
      $formContainer.slideUp(500, function(){
        $addTwittle.removeClass('open');
        $('span.add-text').removeClass('off');
        $('span.cancel-text').addClass('off');
      });
    }
  });

  /*Form Input Submit Functionality */
  $('#twittler-form').submit(function(e) {
    e.preventDefault();
    //Set Form Input Value VAR
    let formInputText = $('#userInput').val()//attr('value');

    if ( formInputText === '') {
      alert('Ooops! Please enter your message!')
    } else {
      //pass form input text to generateCustomTwitt() function
      generateCustomTwitt(formInputText);
      writeTweets(streams.home);

      // clear form input after submit
      $('#userInput').val('');

      //Close Form Again --- Yes I know this needs to be a helper function =)
      $formContainer.slideUp(500, function(){
          $addTwittle.removeClass('open');
            $('span.add-text').removeClass('off');
            $('span.cancel-text').addClass('off');
        });
    }//end else condition
  });
});
