$(document).ready(function(){

    const existingTodos = localStorage.getItem('todos');
    // convert string to array of objects
    // loop through them an append each to ul 
    $("#todoBox").append(`<li>${existingTodos}</li>`);


    $("#todoForm").submit(function(e){
        e.preventDefault();

        // capture form data
        const userInput = new FormData(this);

        // Add the todo in list of todos

        $("#todoBox").append(`<li>${userInput.get('todo')}</li>`);


        // get existing todos from local storage
        // combine new todo with existing todos
        // convert array of objects to string
        // Store data in local storage
        localStorage.setItem('todos',userInput.get('todo'));




    });

});