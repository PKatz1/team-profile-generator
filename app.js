// import modules -->employee, manager, intern, engineer, fs, inquirer, path, import page-template


const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./templates/css")

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")



//create an array to hold all of our team members
let completeTeamArray = [];


// init function
function startingPrompt() {
    inquirer.prompt([
        {
            message: "*********This is Phil's Team Generator App! Please type in your team's name to start:*********",
            name: "teamname"
        }
    ])
        .then(function (data) {
            const teamName = data.teamname
            completeTeamArray.push(teamName)
            addManager();
        })


}

// function to create a Manager
function addManager() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "Enter team manager's office number",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            teamMember.role = "Manager"
            completeTeamArray.push(teamMember)
            addTeamMembers();
        });

}
//function to prompt for adding additional team members 
function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;

                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    compileTeam();
                    break;
            }
        });
}

//function to add Engineer
function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "Enter the engineeer's github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = completeTeamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            teamMember.role = "Engineer"
            completeTeamArray.push(teamMember)
            addTeamMembers()
        });

};


//function to add Intern
function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "Enter the intern's school",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = completeTeamArray.length + 1
            const email = data.email
            const school = data.school  
            const teamMember = new Intern(name, id, email, school)
            teamMember.role = "Intern"
            completeTeamArray.push(teamMember)
            addTeamMembers()
        });

};

// function to put the team together
function compileTeam() {
    console.log("**********Team Complete. Thank you.**********")

    //creation of HTML file
    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${completeTeamArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${completeTeamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < completeTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${completeTeamArray[i].name}</h2>
                <h2>${completeTeamArray[i].role}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${completeTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${completeTeamArray[i].email}">${completeTeamArray[i].email}</a></p>
        `
        if (completeTeamArray[i].officeNumber) {
            object += `
            <p>${completeTeamArray[i].officeNumber}</p>
            `
        }
        if (completeTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${completeTeamArray[i].github}">${completeTeamArray[i].github}</a></p>
            `
        }
        if (completeTeamArray[i].school) {
            object += `
            <p>School: ${completeTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./${completeTeamArray[0]}.html`, htmlArray.join(""), function (err) {
    })
}

startingPrompt()
//end