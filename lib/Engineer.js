const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
        super.getName();
        super.getId();
        super.getEmail();
        super.getRole();
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;