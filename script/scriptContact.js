// Creates a new object of class "Contact"
const myContact = new Contact();

/**
* Displays the contact data in the websites input fields.
* Uses the Contact objects "getProfile" method to achieve this.
*/
function displayProfile() {
    myContact.getProfile();
}

/**
* Sends information from the input fields to the Contact objects "setProfile" method.
*/
function UpdateProfile() {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;

    myContact.setProfile(fName, lName, age, email, address, city);	
}


/**
* Can validate the form input.
* Runs the UpdateProfile() function if the validation is returning true.
*/
function validateForm(e) {
    // JavaScript form input validation can be added here.

    e.preventDefault(); // Prevents the form to do any submission of the data.

    // Updates the profile if the validation is successfull (returns true).
    UpdateProfile();
}