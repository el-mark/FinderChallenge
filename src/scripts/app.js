/*
  main script for only runs every function

  SE ESTA UTILIZANDO JQUERY, TODO ESTO SE PUEDE PASAR A PURO JS O A OTRO FRAMEWORK DE JS

*/

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
    		var savedSearches = categorys[category];
	    	for (var savedSearch in savedSearches) {
		    	$( "#"+category+"" ).append('<li><a href="'+savedSearches[savedSearch].url+'">' + savedSearches[savedSearch].label + '</a></li>');
	    	}
    	}
    }
}

// Ajax de Jquery para recuperar la data de books-schema.json
$.ajax({
    url: "books-schema.json",
    success: function (data) {
    	printData(data);
    }
});

// La instrucción dice eliminar de la vista, se puede esconder o elimitar el elimento html, en este caso obtaré por eliminar el elemento
$('.delete-button').click(function(e) {
    e.preventDefault();
    var option = $(this).attr("option");
    console.log(option);
    $( "#"+option ).remove();
});