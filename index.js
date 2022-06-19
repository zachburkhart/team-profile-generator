const fs = require('fs');
const inquirer = require('inquirer');
const generateSite = require('./util/generateSite');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { resolve } = require('path');

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
    ])
}
