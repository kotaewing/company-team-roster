// load in all dependencies required
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const template = require('./src/htmlTemplate');
const inquirer = require('inquirer');
const fs = require('fs');

// create object to initialize app
class websiteCreation {
    constructor() {
        this.manager;
        // create empty arrays to push new employees into
        this.engineers = [];
        this.interns = [];
    }

    // prompt for team managers info
    teamManager() {
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
            // create new Manager object with information from prompt and then 
            // move to option selection
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
                this.completeTeam();
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
                name: 'github',
                message: "Engineer's GitHub: "
            }
        ])
        .then(({ name, id, email, github }) => {
            // create new Engineer object and push to array of engineers
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
                name: 'school',
                message: "Intern's school: "
            }
        ])
        .then(({ name, id, email, school }) => {
            // create new Intern object and push to array of interns
            this.interns.push(new Intern(name, id, email, school))
            this.selectOptions();
        })
    }

    // function to write HTML into a file saved in the dist directory
    writeToFile(data) {
        fs.writeFile(`./dist/index.html`, data, err => {
            if (err) {
                console.log(err)
                return
            }
            console.log('File Created Successfully!')
        })
    }

    // function to copy style sheet into the dist directory
    copyFile() {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
                return
            }
            console.log('Style Sheet Successfully Copied!')
        });
    };

    // runs the write and copy functions after the team is completely built
    completeTeam() {
        const data = template(this.manager, this.engineers, this.interns);
        this.writeToFile(data)
        this.copyFile()
    }
}

// create new websiteCreation object to initialize prompts
new websiteCreation().teamManager();









