//js File System Module access the file system on your computer and use the require() method: var fs = require('fs');
var fs = require('fs');

//Module Wrapper Function that required (exports, require, module, __filename) or commune js
const greeting = require('./greeting');

//Run an variable called person that required the path person
console.log(greeting);

// The variable inquirer requires inquirer node module
var inquirer = require("inquirer");


// Prompts user for user name, password and to confirm password
inquirer
.prompt([
    {
        type: "input",
        message: "What is your user name?",
        name: "username"
    },
    {
        type: "password",
        message: "What is your password?",
        name: "password"
    },
    {
        type: "password",
        message: "Re-enter password to confirm:",
        name: "confirm"
    }
    ])
    .then(function(response) {
// If passwords match, then success log will be displayed and a userPassword.txt file will be created holding user password 
    if (response.confirm === response.password) {
        console.log("Success!");

        
fs.writeFileSync('userPassword.txt', JSON.stringify(response.password), function(err){

});
// If passwords do not match then error log will display in console
    }
    else {
        console.log("You forgot your password already?!");
    }
});


