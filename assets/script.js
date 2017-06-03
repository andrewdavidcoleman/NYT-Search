$(document).ready(function() {
	$("#search").on("click", function(event) {
		event.preventDefault();
		var searchTerm = $('#searchTerm').val();
		var numberRecords = $('#numberRecords').val();
		var startYear = $('#startYear').val();
		var endYear = $('#endYear').val();
		queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=85f0f6e87ab146ecaaa17182962e6897&q=" + searchTerm.split(' ').join('+') + "&begin_date=" + startYear  + "&end_date=" + endYear;
		$.ajax({
	      url: queryURL,
	      method: "GET"
	    }).done(function(response) {
	    	console.log(response);
	      	
	    });
	});


	
	
 });
