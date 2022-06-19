const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./src/generateSite');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const questions = employeeQuestions => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You need to enter an ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
            message: 'Please select your role'
        }
    ]).then(employeeData => {
         switch (employeeData.role) {
            case 'Employee':
                return addEmployee(employeeData);
            case 'Engineer':
                return addEngineer(employeeData);
            case 'Intern':
                return addIntern(employeeData);
            case 'Manager':
                return addManager(employeeData);
        }
    }).then(pushObject => {
        team.push(pushObject);
        return inquirer.prompt(
            {
                type: 'confirm',
                name: 'continue',
                message: 'Continue adding?'
            }
        )
    })
};

const engineerQuestions = function (employee) {
    return inquirer.prompt(
        {
            type:
        }
    )
}

const managerQuestions = function (employee) {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter an office number'
        }
    ).then(prompt => {
        return new Manager(employee.name, employee.id, employee,email, prompt.officeNumber);
    })
}

const internQuestions = function (employee) {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'school',
            message: 'Please enter a school name'
        }
    ).then(prompt => {
        return new Intern(employee.name, employee.id, employee.email, prompt.school);
    })
}