$(function(){

	$("#btn-submit").click(function(event){
		event.preventDefault();
		$("#search-results").html('');
		var query = $("#query").val();
		getRequest(query);

	});

	function getRequest(searchTerm) {
		
		var params = {
			s: searchTerm,
			r: 'json'
		};

		url = 'https://www.omdbapi.com';

		$.getJSON(url, params, function(data){
			showResults(data.Search);
  	});		
	}

  function showResults(results) {
  	/*
		for (var i = 0; i < myData.length; i++) {
			console.log(myData[i].Title);
		}
    */
  	$.each(results, function(index, value){
  		$("#search-results").append('<p>' + value.Title + '</p>');
      console.log(value.Title);
    });
  }
});