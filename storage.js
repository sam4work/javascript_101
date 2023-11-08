$(document).ready(function(){


    $("#todoForm").submit(function(e){
        e.preventDefault();

        // capture form data
        const userInput = new FormData(this);

        // Add the todo in list of todos

        $("#todoBox").append(`<li>${userInput.get('todo')}</li>`);


        // Store data in local storage



    });

});