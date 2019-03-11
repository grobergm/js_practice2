import { Entry } from './business.js';


$(document).ready(function() {
  $("#journalForm").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("#title").val();
    var inputContent = $("#content").val();
    var newEntry = new Entry(inputTitle, inputContent);
    var newWords = newEntry.words();
    $("#results").append(newEntry.content + newWords);
  });
});
