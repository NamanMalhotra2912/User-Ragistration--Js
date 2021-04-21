const readline = require('readline-sync');

console.log("Welcome to User Ragistration Program");

function validateUser (){

    // UC1 First Name validation
    let firstName = readline.question("Please enter first name : ");
    let regexFirstName = /^[A-Z][a-zA-Z]{2}/;
    if (regexFirstName.test(firstName) == true){
        console.log("First name is : ",firstName);
    }
    else{
        console.log("!! Error !! \nFirst name should contain first capital letter with menimum lenth of 3 characters");
    }

    // UC2 Last Name validation
    let lastName = readline.question("Please enter Last name : ");
    let regexLastName = /^[A-Z][a-zA-Z]{2}/;
    if (regexLastName.test(lastName) == true){
        console.log("Last name is : ",lastName);
    }
    else{
        console.log("!! Error !! \nLast name should contain first capital letter with menimum lenth of 3 characters");
    }

    // UC3 Email validation
    let email = readline.question("Please enter email address : ");
    let regexEmail = /^[a-z.a-zA-Z0-9]+@[a-zA-Z0-9]+(.[a-z])/
    if (regexEmail.test(email) == true){
        console.log("Email id is : ",email);
    }
    else{
        console.log("!! Error !! \nPlease enter correct email address.");
    }
}

validateUser();