//
//
// Custom JS
//
//


// Preventing Widows in Tagline
// source: https://css-tricks.com/preventing-widows-in-post-titles/
//
$(".tagline").each(function() {
  var wordArray = $(this).text().split(" ");
  if (wordArray.length > 1) {
    wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
    wordArray.pop();
    $(this).html(wordArray.join(" "));
  }
});