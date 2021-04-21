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
    
    // UC4 Mobile Format
    let mobileNumber = readline.question("Please enter mobile number : ");
    let regexMobile = /^[0-9]{2}-[0-9]{10}/
    if (regexMobile.test(mobileNumber) == true){
        console.log("Mobile number is : ",mobileNumber);
    }
    else{
        console.log("!! Error !! \nPlease enter correct mobile number.");
    }
    
    // UC5 Password lenth should be minimum 8 characters.
    let password = readline.question("Please enter your password : ");
    let regexPassword = /^[a-zA-Z0-9]{8,}/
    if (regexPassword.test(password) == true){
        console.log("Password is : ",password);
    }
    else{
        console.log("!! Error !! \nPlease enter correct password.");
    }

    // UC6 Password should have atleast one Upper case
    let passwordRule2 = readline.question("Please enter your password including Uppercase : ");
    let regexPasswordRule2 = /^[A-Z][a-zA-Z0-9]{8,}/
    if (regexPasswordRule2.test(passwordRule2) == true){
        console.log("Password is : ",passwordRule2);
    }
    else{
        console.log("!! Error !! \nPlease enter correct password.");
    }
}

validateUser();