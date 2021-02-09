const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const EmployeeQuestions = [
  {
    type: "input",
    message: "What is the name of your application?",
    name: "appName",
  },
  {
    type: "input",
    message: "Please describe your application",
    name: "appDescription",
  },
  {
    type: "input",
    message: "Please explain how to install your application.",
    name: "appInstall",
  },
  {
    type: "input",
    message: "Please explain how to use your application.",
    name: "appUsage",
  },
  {
    type: "list",
    message:
      "Please select which type of license you used for this application.",
    choices: ["MIT", "ISC", "Apache License 2.0", "GNU GPLv3"],
    name: "appLicense",
  },
  {
    type: "input",
    message:
      "Please explain your contribution guidelines for this application.",
    name: "appContributions",
  },
  {
    type: "input",
    message: "Please explain how to run tests for your application.",
    name: "appTests",
  },
  {
    type: "input",
    message: "Please enter instructions on how you might be contacted.",
    name: "contactInstructions",
  },
  {
    type: "input",
    message: "Please enter your Github Username.",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "Please enter your e-mail address.",
    name: "eMail",
  },
];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
  /* Pass your questions in here */
]);
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
