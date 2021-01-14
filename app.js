const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// const employeeQuestions = inquirer.prompt([
//     {
//         type: 'input',
//         message: `What is the employee's name?`,
//         name: 'Employee',
//     },
//     {
//         type: 'number',
//         message: `What is the employee's id number?`,
//         name: 'Employee Id',
//     },
//     {
//         type: 'input',
//         message: `What is the employee's email?`,
//         name: 'Employee Email',
//     },
//     {
//         type: 'list',
//         message: `What is the role?`,
//         name: 'Employee Role',
//         choices: ["Engineer", "Intern"]
//     }
// ]);

const questions = inquirer.prompt([
    {
        type: 'input',
        message: `What is the employee's name?`,
        name: 'Employee',
    },
    {
        type: 'number',
        message: `What is the employee's id number?`,
        name: 'Employee Id',
    },
    {
        type: 'input',
        message: `What is the employee's email?`,
        name: 'Employee Email',
    },
    {
        type: 'list',
        message: `What is the role?`,
        name: 'Employee Role',
        choices: ["Engineer", "Intern"]
    },
    {
        type: 'input',
        message: `What is the manager's name?`,
        name: 'Manager',
    },
    {
        type: 'number',
        message: `What is the manager's id number?`,
        name: 'Manager Id',
    },
    {
        type: 'input',
        message: `What is the manager's email?`,
        name: 'Manager Email',
    },
    {
        type: 'number',
        message: `What is the manager's office number?`,
        name: 'Manager Office Number',
    },
    {
        type: 'input',
        message: `What is the Engineer's name?`,
        name: 'Engineer',
    },
    {
        type: 'number',
        message: `What is the Engineer's id number?`,
        name: 'Engineer Id',
    },
    {
        type: 'input',
        message: `What is the Engineer's email?`,
        name: 'Engineer Email',
    },
    {
        type: 'input',
        message: `What is the Engineer's GitHub username?`,
        name: 'Engineer GitHub',
    },
    {
        type: 'input',
        message: `What is the Intern's name?`,
        name: 'Intern',
    },
    {
        type: 'number',
        message: `What is the Intern's id number?`,
        name: 'Intern Id',
    },
    {
        type: 'input',
        message: `What is the Intern's email?`,
        name: 'Intern Email',
    },
    {
        type: 'input',
        message: `What is the Intern's school?`,
        name: 'Intern School',
    },
    
]);

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
