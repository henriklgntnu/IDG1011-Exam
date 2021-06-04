let table = document.querySelector("#displayPersons"); // Saves reference for the table

window.addEventListener("load", showAll); // Displays all the persons when loading the page

// Listeners which refers to input radios, if checked the listener will run a function
let friends = document.getElementById("radioFriends");
friends.addEventListener('change', showFriends);

let family = document.getElementById("radioFamily");
family.addEventListener('change', showFamily);

let all = document.getElementById("radioAll");
all.addEventListener('change', showAll);

/**
* Displays all friends in the websites table.
* Retrives the data from a JSON file.
*/
function showFriends() {
    table.innerHTML = ` 
        <tr>
            <th class="firstRow">Name</th>
            <th class="firstRow">Age</th>
            <th class="firstRow">City</th>
        </tr>`; // resets the content of the table before creating new content

    fetch("script/friendsAndFamily.json")
        .then(res => res.json())
        .then(obj => {
            obj.forEach(person => {  // code to be excecuted for each array element
                if (person.relation === "Friend") {
                    let tr = document.createElement("tr"); // creates a table row to containd table data

                    // inserts data about a person into the table row
                    tr.innerHTML = `
                        <td headers="personsName">${person.name}</td>
                        <td headers="personsAge">${person.age}</td>
                        <td headers="personsCity">${person.city}</td>`;

                    table.appendChild(tr); // adds the table row containing table data to the table
                }
            })
        });
}

/**
* Displays all family members in the websites table.
* Retrives the data from a JSON file.
*/
function showFamily() {
    table.innerHTML = ` 
        <tr>
            <th class="firstRow">Name</th>
            <th class="firstRow">Age</th>
            <th class="firstRow">City</th>
        </tr>`; // resets the content of the table before creating new content

    fetch("script/friendsAndFamily.json")
        .then(res => res.json())
        .then(obj => {
            obj.forEach(person => {  // code to be excecuted for each array element
                if (person.relation === "Family") {
                    let tr = document.createElement("tr"); // creates a table row to containd table data

                    // inserts data about a person into the table row
                    tr.innerHTML = `
                        <td headers="personsName">${person.name}</td>
                        <td headers="personsAge">${person.age}</td>
                        <td headers="personsCity">${person.city}</td>`;

                    table.appendChild(tr); // adds the table row containing table data to the table
                }
            })
        });
}

/**
* Default function for showing all the friends and family members.
* Retrives the data from a JSON file.
*/
function showAll() {
    table.innerHTML = ` 
        <tr>
            <th class="firstRow">Name</th>
            <th class="firstRow">Age</th>
            <th class="firstRow">City</th>
        </tr>`; // resets the content of the table before creating new content
        
    fetch("script/friendsAndFamily.json") 
        .then(res=>res.json())
        .then(obj=> {    
            obj.forEach(person=>{  // code to be excecuted for each array element

            let tr = document.createElement("tr"); // creates a table row to containd table data

            // inserts data about a person into the table row
            tr.innerHTML = `
                        <td headers="personsName">${person.name}</td>
                        <td headers="personsAge">${person.age}</td>
                        <td headers="personsCity">${person.city}</td>`;

            table.appendChild(tr); // adds the table row containing table data to the table
    })
});
}