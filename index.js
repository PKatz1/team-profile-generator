// import modules -->employee, manager, intern, engineer, fs, inquirer, path, import page-template

const manager = require('./lib/Manager');
const employee = require('./lib/Employee');
const intern = require('./lib/Intern');
const intern = require('./lib/Engineer');
const fs = require ('path');
const inquirer = require('inquirer');
const generatePageTemplate = require('./page-template');


//use path module to define the path to the output director
const OUTPUT_DIR = path.resolve(_dirname, "output")
const outputPath - path.join(OUTPUT_Dir, "team.html);

//create an arraay to hold all of our team members

// init function

// function to create a Manager
    //prompt user with questions needed to satisfy the input for a manager object
    inquirer.prompt().then()
    //.then statement
    //create a new instance of the Manager class
    //push the new manager object to the team members' array
    //call the function to create the rest of the team

    //function to create the rest of the team
    //prompt user to select which type of employee they would like to add
    //options include engineer, intern, or an option to not add anymore team members
    //.then statement
    //if a type of employee was selected, call function to add that type of emploeye
    //if the other option was selected, call the function to create the output

    //function to add an engineer
    //same idea as create Manager

    //function to add an intern
    //same idea as create manager

    //fucntion to create the output
    //call the function from page-template module and pass it in the team members' array and safe to a data variable
    //use fs module to write the file -> pass in the outputPath, the data, and the "utf-8"

    //call the function to create a manager to start the process
()
    //call init


// function Employee(name, title, id, email, tel) {
//     this.name = name;
//     this.title = title;
//     this.id = id;
//     this.email = email;
//     this.tel = tel;
//     this.employeeList = () => {
//         console.log(`Employee Name: ${this.name}, Employee Job Title: ${this.title}, Employee ID No.${this.id}, Employee eMail:${this.email}, Employee Telephone:${this.tel}`);
//     }
// }

// const jim = new Employee('Jim Mama', 'Manager', 1, 'jim@jim.com', '555-555-1212');
// const joe = new Employee('Joe Mama', 'Director', 2, 'joe@joe.com', '555-555-1213');
// const jane = new Employee('Jane Doe', 'Lead Programmer', 3, 'jane@jane.com', '555-555-1214');
// const suzy = new Employee('Suzy Jones', 'Programmer', 4, 'suzy@suzy.com', '555-555-1215');

// jim.employeeList();
// joe.employeeList();
// jane.employeeList();
// suzy.employeeList();
