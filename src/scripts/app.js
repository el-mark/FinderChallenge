/*
  main script for only runs every function
*/

searchForm();

function printData(data){
    console.log(data.entities);

    for (var key in data.entities) {
    	$( ".saved-searches-div" ).append('<h2>' + key + '</h2>');
    }
}


$.ajax({
    url: "books-schema.json",
    success: function (data) {
    	printData(data);
    }
});