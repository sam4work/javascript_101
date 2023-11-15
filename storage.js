$(document).ready(function () {

    // convert string to array of objects
    const existingTodos = !localStorage.getItem('todos') ? [] :
        JSON.parse(localStorage.getItem('todos'));
    ;

    // loop through them an append each to ul 
    existingTodos.forEach(todo => {
        $("#todoBox").append(`<li>${todo.title}</li>`);
    });



    $("#todoForm").submit(function (e) {
        e.preventDefault();

        // capture form data
        const userInput = new FormData(this);

        // Add the todo in list of todos

        $("#todoBox").append(`<li>${userInput.get('todo')}</li>`);


        // get existing todos from local storage
        const oldTodos = localStorage.getItem('todos');

        // combine new todo with existing todos
        const newTodo = [{
            title: userInput.get('todo'),
            completed: false,
        }]

        // let allTodos = [];

        const allTodos = 
            !oldTodos ? [...newTodo] : [
                ...newTodo,
                ...JSON.parse(oldTodos)
            ]
        

        // if (!oldTodos) {
        //     allTodos = [
        //         ...newTodo
        //     ]
        // } else {
        //     allTodos = [
        //         ...JSON.parse(oldTodos),
        //         ...newTodo
        //     ]
        // }

        console.log(allTodos);
        console.log(JSON.stringify(allTodos));

        // convert array of objects to string
        // Store data in local storage
        localStorage.setItem('todos', JSON.stringify(allTodos));




    });

});