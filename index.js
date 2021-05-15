const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTemplate = require('./src/htmlTemplate');
const inquirer = require('inquirer');
const fs = require('fs');

// prompt for team managers info
class websiteCreation {

    teamManager() {
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Team manager's name: "
            },
            {
                type: 'text',
                name: 'id',
                message: "Team manager's employee id: "
            },
            {
                type: 'text',
                name: 'email',
                message: "Team manager's email: "
            },
            {
                type: 'text',
                name: 'officeNum',
                message: "Team manager's office number: "
            }
        ])
        .then(() => {
            this.selectOptions()
        })
    }
    
    // options to add engineer or intern or complete team
    selectOptions() {
        inquirer
        .prompt({
            type: 'list',
            name: 'options',
            message: 'Choose an option below: ',
            choices: ['Add New Engineer', 'Add New Intern', 'Complete Your Team']
        })
        .then(({ options }) => {
            if (options === 'Add New Engineer') {
                this.addEngineer();
            } else if (options === 'Add New Intern') {
                this.addIntern();
            } else {
                console.log('completed')
            }
        })
    }
    
    // prompt for engineer info
    addEngineer() {
        console.log('engineer');
    }
    // prompt for intern info
    addIntern() {
        console.log('intern')
    }
}

new websiteCreation().teamManager();


