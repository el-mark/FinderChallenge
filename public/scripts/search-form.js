/*

  SE ESTA UTILIZANDO JQUERY, TODO ESTO SE PUEDE PASAR A PURO JS O A OTRO FRAMEWORK DE JS

*/


var input = document.getElementById("search-input");
new Awesomplete(input, {
	list: ["Poema de Gilgamesh", "Las mil y una noches", "Todo se desmorona", "Cuentos infantiles", "Divina Comedia", "Orgullo y prejuicio", "Viaje al fin de la noche"],
	minChars: 3,
	maxItems: 7,
});



$(document).ready(function(){
    $('#search-button').attr('disabled',true);
    $('#search-input').keyup(function(){
        if($(this).val().length > 1)
            $('#search-button').attr('disabled', false);            
        else
            $('#search-button').attr('disabled',true);
    })
});