$(document).ready(function(){
  $(".new-tweet textarea").on("keyup", function() {
    // get number of characters remaining
    var charLeft = 140 - $(this).val().length;

    if (charLeft < 0){
      $(this).siblings(".counter").css('color', 'red');
    } else {
      $(this).siblings(".counter").css('color', 'black');
    }

    // set the text on the html
    $(this).siblings(".counter").text(charLeft);
  });
})
