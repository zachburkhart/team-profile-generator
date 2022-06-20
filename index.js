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
                return EmployeeSpecific(employeeData);
            case 'Engineer':
                return EngineerSpecific(employeeData);
            case 'Intern':
                return InternSpecific(employeeData);
            case 'Manager':
                return ManagerSpecific(employeeData);
        } return team;
    })
};

const employeeSpecific = function (employee) {
    return new Employee(employee.name, employee.id, employee.email)
};

const engineerSpecific = function (employee) {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'github',
            message: 'Please enter a GitHub username'
        }
    ).then(prompt => {
        return new Engineer(employee.name, employee.id, employee,email, prompt.github);
    })
};

const managerSpecific = function (employee) {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter an office number'
        }
    ).then(prompt => {
        return new Manager(employee.name, employee.id, employee,email, prompt.officeNumber);
    })
};

const internSpecific = function (employee) {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'school',
            message: 'Please enter a school name'
        }
    ).then(prompt => {
        return new Intern(employee.name, employee.id, employee.email, prompt.school);
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(error);
            return;
        } else {
            console.log("Success! Navigate to dist directory");
        }
    })
};

questions([])
.then(team => {
    return generateSite(team);
})
.then(siteHTML => {
    return writeFile(siteHTML);
})