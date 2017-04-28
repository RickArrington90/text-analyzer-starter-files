function getAverage(tokens) {
  var wordsLength = tokens.join("").length;
  return (wordsLength / tokens.length).toFixed(2);
}


function findDistinctWords(tokens) {
  var realWords = [];
  for(var i=0; i<tokens.length; i++){
    if (realWords.indexOf(tokens[i]) === -1) {
        realWords.push(tokens[i]);
        }
  }
  return realWords.length;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function reportText (text) {
  var tokens = tokenizeText(text);
  var numDistinctWords = findDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWords = getAverage(tokens);
  
  var textReport = $('.text-report');
   textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numDistinctWords);
  textReport.find('.js-average-word-length').text(
    averageWords + " characters");
  textReport.removeClass('hidden');
}

function formSubmission() {
  $('form').submit(function(event) {
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    reportText(removeReturns(userText));
  });
}

$(function(){
  formSubmission();
});