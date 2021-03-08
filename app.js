const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const EmployeeQuestions = [];
const employees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//Manager Questions
function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?",
      },
    ])
    .then(function (managerAnswers) {
      console.log(managerAnswers);
      const manager = new Manager(
        managerAnswers.name,
        managerAnswers.id,
        managerAnswers.email,
        managerAnswers.officeNumber
      );
      employees.push(manager);
      addNewEmp();
    });
}

// Engineer Questions
function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's Github account?",
      },
    ])
    .then(function (engineerAnswers) {
      console.log(engineerAnswers);
      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );
      employees.push(engineer);
      addNewEmp();
    });
}

// Intern Questions
function internPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What school did the employee attend?",
      },
    ])
    .then(function (internAnswers) {
      console.log(internAnswers);
      const intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      employees.push(intern);
      addNewEmp();
    });
}

// Adding a new employee
function addNewEmp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        message: "Which type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Build my team."],
      },
    ])
    .then(function (answers) {
      switch (answers.selection) {
        case "Manager":
          managerPrompt();
          break;
        case "Engineer":
          engineerPrompt();
          break;
        case "Intern":
          internPrompt();
          break;
        default:
          employeeTeam();
      }
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function employeeTeam() {
  return fs.writeFileSync(outputPath, render(employees));
}

addNewEmp();
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
