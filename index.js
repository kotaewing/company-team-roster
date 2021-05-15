const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const html = require('./src/htmlTemplate');
const inquirer = require('inquirer');
const fs = require('fs');

// prompt for team managers info
class websiteCreation {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    teamManager(manager) {
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "Team Manager's name: "
            },
            {
                type: 'text',
                name: 'id',
                message: "Team Manager's employee id: "
            },
            {
                type: 'text',
                name: 'email',
                message: "Team Manager's email: "
            },
            {
                type: 'text',
                name: 'officeNum',
                message: "Team manager's office number: "
            }
        ])
        
        .then(({ name, id, email, officeNum }) => {
            this.manager = new Manager(name, id, email, officeNum);
            this.selectOptions();
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
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Engineer's name: "
            },
            {
                type: 'text',
                name: 'id',
                message: "Engineer's employee id: "
            },
            {
                type: 'text',
                name: 'email',
                message: "Engineer's email: "
            },
            {
                type: 'text',
                name: 'officeNum',
                message: "Engineer's GitHub: "
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineers.push(new Engineer(name, id, email, github))

            this.selectOptions();
        })
    }
    // prompt for intern info
    addIntern() {
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Intern's name: "
            },
            {
                type: 'text',
                name: 'id',
                message: "Intern's employee id: "
            },
            {
                type: 'text',
                name: 'email',
                message: "Intern's email: "
            },
            {
                type: 'text',
                name: 'officeNum',
                message: "Intern's school: "
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineers.push(new Engineer(name, id, email, github))

            this.selectOptions();
        })
    }
}

new websiteCreation().teamManager('Team Manager');


