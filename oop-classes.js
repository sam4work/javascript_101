import User from "./User.js";


document.addEventListener("DOMContentLoaded", () => {

    // another way to select any DOM Element
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const fields = ['username', 'password']

        const userInput = new FormData(event.target);

        for (const field of fields) {
            if (userInput.get(field) === null || userInput.get(field) === "") {
                const errorField = document.querySelector(`#${field}-error-message`);
                errorField.textContent = `${field} is required`;
                errorField.style.color = 'red';
                errorField.style.fontSize = '8px';
                document.querySelector(`[name=${field}]`).style.border = '1px solid red';
                break;
            }

            // Username length must be max 20 characters
            // Username must be alpha numeric
            // Password length min 8 characters
            // Password must contain at least 1 capital letter, 1 small letter, 1 number and 1 special character
        }


        const user = new User();

        if (user.login(userInput.get('username'), userInput.get('password'))) {
            console.log(userInput);
        }





    });



});
