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
}

validateUser();