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
                    var showList = ["red", "cyan", "magenta"];
                    var msg = $("<p></p>");
                        for(i = 0; i < showList.length; i++) {//works but runs twice?
                            if(myObj.color === showList[i]) {
                                 msg.append("Color: " + myObj.color);
                                $('.newDiv').last().html(msg);
                            } else {
                console.log("That is a bad color!");
            }
            }
            })
            
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

});