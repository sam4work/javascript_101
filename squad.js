document.addEventListener("DOMContentLoaded", () => {

    const squads = {
        chelsea: ["jackson", "essien", "drogba"],
        roma: ["lukaku", "dybala", "pellegrini"],
        interMilan: ["thuram", "bastoni", "barela"],
    }

    const createSelectOption = (value, text) => {
        let option = document.createElement('option');
        option.value = value;
        option.textContent = text
        return option;
    }


    // get the empty select element on the page
    const teamSelection = document.getElementById("teams")

    // get the object keys of the squads object variable
    // and loop over each each
    Object.keys(squads).map(team => {
        teamSelection.appendChild(
            createSelectOption(team,team.toUpperCase())
        )
    })


    teamSelection.addEventListener("change", (e) => {

        const playerSelection = document.getElementById("players");

        // reset the player element dropdown when you change a team
        playerSelection.innerHTML = null
        playerSelection.appendChild(
            createSelectOption("","Select a player")
        )

        // squads[e.target.value] might not work in typescript

        if (squads[e.target.value].length > 0) {

            squads[e.target.value].map(player => {
                // create an option element
                // let option = document.createElement('option');

                // set option element value
                // option.value = player;

                // set inner text for option element
                // option.textContent = player.toUpperCase();

                // add option element as child to the player select element
                playerSelection.appendChild(
                    createSelectOption(player,player.toUpperCase())
                )
            })


        }


    })

    






    console.log("Hello World!");
});