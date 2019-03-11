import { Entry } from './business.js';


$(document).ready(function() {
  $("#journalForm").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("#title").val();
    var inputContent = $("#content").val();
    var newEntry = new Entry(inputTitle, inputContent);
    var newWords = newEntry.words();
    var newVowels = newEntry.charType().vowels;
    var newConsonents = newEntry.charType().consonants;

    $("#results").append(`<h1>${newEntry.title}</h1><p>${newEntry.content}</p><p>There are ${newWords} words</p><p>Here are the vowels: ${newVowels}</p><p>Here are the consonents: ${newConsonents}</p>`);
  });
});
