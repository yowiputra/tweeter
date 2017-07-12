$(document).ready(function(){
  function createTweetElement(dataObj) {
    var $tweet = $("<article>").addClass("tweet");
    // create header and its children
    var header = $("<header>").addClass("tweet-header");
    header.append($("<img>").addClass("tweet-thumbnail").attr("src", dataObj.user.avatars.small));
    header.append($("<h3>").addClass("tweet-name").text(dataObj.user.name));
    header.append($("<span>").addClass("tweet-handle").text(dataObj.user.handle));
    // create main and its children
    var main = $("<main>").addClass("tweet-content");
    main.append($("<p>").addClass("tweet-body").text(dataObj.content.text));
    // create footer and its children
    var footer = $("<footer>").addClass("tweet-footer");
    var date = new Date(dataObj.created_at*1000);
    footer.append($("<span>").addClass("tweet-timestamp").text(date.toUTCString()));
    footer.append($("<i>").addClass("fa fa-heart"));
    footer.append($("<i>").addClass("fa fa-retweet"));
    footer.append($("<i>").addClass("fa fa-flag"));
    // append header, main , footer to tweet
    $tweet.append(header).append(main).append(footer);
    return $tweet;
  }

  function renderTweets(tweets) {
    $('#tweet-container').empty();
    tweets.forEach((userObj) => {
      var $tweet = createTweetElement(userObj);
      $('#tweet-container').prepend($tweet);
    })
  }

  function loadTweets() {
    $.getJSON('/tweets')
      .done((tweets) => {
        renderTweets(tweets);
      })
  }

  function isValid() {
    var charLength = $(".new-tweet textarea").val().length;
    if (!charLength) {
      alert("Tweet is empty")
      return false;
    }
    if (charLength > 140) {
      alert("Tweet exceeds 140 characters");
      return false;
    }
    return true;
  }

  function postTweet(event) {
    event.preventDefault();
    if (isValid()) {
      const $form = $(this);
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $form.serialize()
      })
        .done(() => {
          loadTweets();
          $('.new-tweet textarea').val('');
        })
    }
  }

  function toggleComposeBox(event) {
    $('.new-tweet').slideToggle("slow", () => {
      $('.new-tweet textarea').focus();
    });
  }

  // Event handlers
  $('#submit-tweet-form').on('submit', postTweet);
  $('.compose-button').on('click', toggleComposeBox);

  // Do first load
  loadTweets();
});
