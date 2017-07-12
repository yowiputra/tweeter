$(document).ready(function(){
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

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
    tweets.forEach(function(userObj){
      var $tweet = createTweetElement(userObj);
      $('#tweet-container').append($tweet);
    })
  }

  renderTweets(data);
});
