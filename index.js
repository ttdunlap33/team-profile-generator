const Intern = require("./team/intern");
const Manager = require("./team/manager");
const Engineer = require("./team/engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembers = [];
const idArray = [];
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./team/renderhtml");

function appMenu() {

    function createManager() {
        console.log("Let's create your team.");
        inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Enter your manager's name.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's id?",
            validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Enter a number greater than 0.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?",
            validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "Enter your manager's correct email address.";
            }
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is your manager's office number?",
            validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Enter a number greater than 0.";
            }
        }
        ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
        });
    }

    function createTeam() {

        inquirer.prompt([
        {
            type: "list",
            name: "teamChoice",
            message: "Which type of team member would you like to add?",
            choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
            ]
        }
        ]).then(userChoice => {
            switch(userChoice.teamChoice) {
            case "Engineer":
            addEngineer();
            break;
            case "Intern":
            addIntern();
            break;
            default:
            buildTeam();
            }
        });
    }
    
        function addEngineer() {
        inquirer.prompt([
            {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
                }
                return "Enter your engineer's name.";
            }
            },
            {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's id?",
            validate: answer => {
                const pass = answer.match(
                /^[1-9]\d*$/
                );
            if (pass) {
                if (idArray.includes(answer)) {
                    return "This ID is taken. Enter a different number.";
                } else {
                    return true;
                }
                            
                }
                    return "Enter a number greater than 0.";
            }
            },
            {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?",
            validate: answer => {
                const pass = answer.match(
                /\S+@\S+\.\S+/
                );
                if (pass) {
                return true;
                }
                return "Enter your engineer's correct email address.";
            }
            },
            {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                return true;
                }
                return "Enter your engineer's GitHub username.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
        }
    
        function addIntern() {
        inquirer.prompt([
            {
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
                return "Enter at least one character.";
            }
            },
            {
            type: "input",
            name: "internId",
            message: "What is your intern's id?",
            validate: answer => {
            const pass = Number(answer) != NaN;
            if (pass) {
                if (idArray.includes(answer)) {
                    return "This ID is already taken. Enter a different number.";
                } else {
                    return true;
                }
                            
            }
                return "Enter a number greater than 0.";
            }
            },
            {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
            validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
                return "Enter your intern's correct email address.";
            }
            },
            {
            type: "input",
            name: "internSchool",
            message: "What school did your intern attend?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Enter your intern's school.";
            }
            }
        ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
        });
        }

        
        // creates the output directory
        function buildTeam() {
            
            if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
        }
        
        createManager();
        
        }
        
        
        appMenu();

