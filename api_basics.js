"use strict";

document.addEventListener("DOMContentLoaded", function () {

    console.log("Hello");

    // Promise / resolve
    fetch(
        'https://catfact.ninja/fact', // url
        {
            method: "GET", // request method
            headers: {
                'accept': 'application/json',
                'X-CSRF-TOKEN': 'HbY92a2aiPbC4i7vUs9K1CKjNY7LmK5llmlBFvUE'
            } // request header that help describe request to server
        }).then(res => {
            // will run if successful and create a promise
            console.log(res);
            return res.json();
        }).then(res => {
            // will run if successful and resolve the promise
            console.log(res);
        }).
        catch(err => {
            // will run if unsuccessful/ error in request
            console.error(err);
        }).finally(() => {
            // will run if whether successful / error in request
            console.log("i will always run with or without error")
        });

});