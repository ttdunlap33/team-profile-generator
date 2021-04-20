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
const render = require("./team/runhtml");

