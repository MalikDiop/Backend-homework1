//js File System Module access the file system on your computer and use the require() method: var fs = require('fs');
var fs = require('fs');
//Module Wrapper Function that required (exports, require, module, __filename) or commune js
const greeting = require('./greeting');
//Run an variable called person that required the path person
console.log(greeting);


var inquirer = require("inquirer");
// const { greeting } = require('./greeting');

// const readline = require('readline').createInterface({
//  input: process.stdin,
//  output: process.stdout
// });
// const read = fs.readFileSync('userPassword.txt', 'utf8');
// console.log(read);

inquirer.prompt([
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

    if (response.confirm === response.password) {
        console.log("Success!");
    }
    else {
        console.log("You forgot your password already?!");
    }
});


