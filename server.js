const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3001,

  user: "root",

  password: " ",
  database: "employees_db",
},
console.log('Connected to employees_db database.')
);

firstPrompt();

function firstPrompt(){
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
          "View Employees", "View Employees by Department",
        ]
    })
}
