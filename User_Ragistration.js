console.log("Welcome to User Ragistration Program");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class UserRagistration{

    firstName() {
        readline.question('Please enter your first name\t', name =>{
            let regex = /^[A-Z][a-zA-Z]{2}/
            let verify = regex.test(name);
        
            if(verify == true){
                console.log("First Name is : "+name);
            }
            else{
                console.log("!! Error !! \nFirst name should contain first capital letter with menimum lenth of 3 characters");
            }
            readline.close();
        })
    }
}

const object = new UserRagistration();
object.firstName();