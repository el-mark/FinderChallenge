/*
  main script for only runs every function
*/

searchForm();

function printData(data){

	var categorys = data.entities;

    for (var category in categorys) {
    	$( ".saved-searches-div" ).append('<h2 class="categorys">' + category + '</h2><ul id="'+ category +'" class="saved-searches" ></ul>');
    	if (category != 'saved') {
    		var subCategorys = categorys[category][0];
	    	for (var subCategory in subCategorys) {
		    	$( "#"+category+"" ).append('<li><a href="#">' + subCategorys[subCategory].label + '</a></li>');
	    	}
    	} else {
    		console.log(categorys);
    		var savedSearches = categorys[category];
	    	for (var savedSearch in savedSearches) {
		    	$( "#"+category+"" ).append('<li><a href="'+savedSearches[savedSearch].url+'">' + savedSearches[savedSearch].label + '</a></li>');
	    		console.log(savedSearch);
	    	}
    	}
    }
}


$.ajax({
    url: "books-schema.json",
    success: function (data) {
    	printData(data);
    }
});