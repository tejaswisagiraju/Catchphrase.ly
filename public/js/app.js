$( document ).ready(function() {

 
$.get("/phrases", function(phraseArray)) {

   var phraseArray = $.parseJSON(phraseArray); 
	 $("body")
    .append("word: " + phraseArray.word)
    .append("Description: " + phraseArray.definition);


},"json");


});

function myPhrases() {


var myData = {"word": phraseArray.word[id], "definition": phraseArray.definition[id]}
var tmpl_str = $("#phrase-template").html();
var compile = _.template(tmpl_str); // returns a function!
var html_str = compile(myData);
$("body").html(html_str);



}

