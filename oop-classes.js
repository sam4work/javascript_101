import User from "./User.js";


document.addEventListener("DOMContentLoaded", () => {

    // another way to select any DOM Element
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener('submit',(event) => {
        event.preventDefault();

        const userInput =  new FormData(event.target);

        console.log(userInput);


    });



});
