function searchForm(){
    // code here
}


$(document).ready(function(){
    $('#search-button').attr('disabled',true);
    $('#search-input').keyup(function(){
        if($(this).val().length > 1)
            $('#search-button').attr('disabled', false);            
        else
            $('#search-button').attr('disabled',true);
    })
});