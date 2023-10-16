"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const factContent = document.getElementById("fact");
    const btnLoadFact = document.getElementById("btnLoadFact");
    
        const results = async () => {
            try {
             const res = await fetch('https://catfact.ninja/fact', {
                 method: "GET",
                 headers: {
                     'accept': 'application/json',
                     'X-CSRF-TOKEN': 'HbY92a2aiPbC4i7vUs9K1CKjNY7LmK5llmlBFvUE'
                 }
             });
     
             const finalRes =  await res.json(); //javascript object notation
             factContent.textContent = finalRes.fact;

            } catch (error) {
             console.log(error);
            }finally{

            }
         }


        //  callback
         btnLoadFact.addEventListener("click", results);

     

});