$(document).ready(function() {

    $.ajax('index.html', {
        success: function(response){$('.myDiv').html(response)},
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

    $.ajax('data.json', {
        success: function(response){

            $.each(response, function(index, myObj) {
                $('body').append("<div class='newDiv addColor'></div>");
                var msg = $("<p></p>");
                msg.append("Color: " + myObj.color);
                $('.newDiv').last().html(msg);
            })
            
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

});