document.addEventListener("DOMContentLoaded", () => {

    const squads = {
        chelsea : ["jackson","essien","drogba"],
        roma : ["lukaku","dybala","pellegrini"],
        interMilan : ["thuram","bastoni","barela"],
    }


    // get the empty select element on the page
    const teamSelection = document.getElementById("teams")

    // get the object keys of the squads object variable
    // and loop over each each
    Object.keys(squads).map(team => {
        // create an option element
        let option = document.createElement('option');

        // set option element value
        option.value = team.toLowerCase();

        // set inner text for option element
        option.textContent = team.toUpperCase();

        // add option element as child to the team select element
        teamSelection.appendChild(
            option
        )
        
    })






    console.log("Hello World!");
});