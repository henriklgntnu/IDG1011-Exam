/**
 * Objects of this class is used to hold information about a contact.
 * If it exists contact data already this is retrived from localStorage and
 * presented in the webpages input fields.
 */
 class Contact {
    /**
    * Constructor creates variables to be used for the methods.
    * One variable for firstname, lastname, age, email, address and city.
    */
    constructor() {
        this.fName = "";
        this.lName = "";
        this.age = 0;
        this.email = "";
        this.address = "";
        this.city = "";
    }

    /**
    * Sets the contact data into local variables.
    * Calls the saveProfile method.
    *
    * @param  {String} newFn new name of the person
    * @param  {String} newLn new age of the person
    * @param  {String} newEmail new email of the person
    * @param  {Number} newAddress new address of the person
    * @param  {Number} newCity new city of the person
    */
    setProfile(newFn, newLn, newAge, newEmail, newAddress, newCity) {
        this.fName = newFn;
        this.lName = newLn;
        this.age = newAge*1;
        this.email = newEmail;
        this.address = newAddress;
        this.city = newCity;

        this.saveProfile();
    }

    /**
    * Saves the profile changes to local browser storage.
    */
    saveProfile() {
        localStorage.setItem("firstName", this.fName);
        localStorage.setItem("lastName", this.lName);
        localStorage.setItem("age", this.age);
        localStorage.setItem("email", this.email);
        localStorage.setItem("address", this.address);
        localStorage.setItem("city", this.city);
        localStorage.setItem("contactExists", "true");
    }

    /**
    * If there exists contact data in the localStorage, it will be added to the object 
    * and the data will be displayed in the websites input fields.
    */
    getProfile() {
        if (localStorage.getItem("contactExists") == "true") {
            let fName = document.getElementById("fName");
            let lName = document.getElementById("lName");
            let age = document.getElementById("age");
            let email = document.getElementById("email");
            let address = document.getElementById("address");
            let city = document.getElementById("city");

            this.fName = localStorage.getItem("firstName");
            this.lName = localStorage.getItem("lastName");
            this.age = localStorage.getItem("age")*1;
            this.email = localStorage.getItem("email");
            this.address = localStorage.getItem("address");
            this.city = localStorage.getItem("city");

            fName.value = this.fName;
            lName.value = this.lName;
            age.value = this.age;
            email.value = this.email;
            address.value = this.address;
            city.value = this.city;
        }
    }
}