
//jq ui

$(document).ready(function(){

//Accordion

	$( "#accordion" ).accordion({
		collapsible: true
	});

	//Autocomplete

	var typeData = [
		"html",
		"css",
		"js",
		"jq",
		"php",
		"wordpress",
		"python",
		"jango",
		"ActionScript",
	    "AppleScript",
	    "Asp",
	    "BASIC",
	    "C",
	    "C++",
	    "Clojure",
	    "COBOL",
	    "ColdFusion",
	    "Erlang",
	    "Fortran",
	    "Groovy",
	    "Haskell",
	    "Java",
	    "JavaScript",
	    "Lisp",
	    "Perl"
	];

	  $( "#c_name" ).autocomplete({
      source: typeData
    });

   //datepicke

	  $( "#c_date" ).datepicker();


	  //tabs

	  $( "#tabs" ).tabs();

	  //tooltip

	  




});