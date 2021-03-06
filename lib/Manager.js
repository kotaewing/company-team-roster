const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = 'Manager';
        super.getName();
        super.getId();
        super.getEmail();
        super.getRole();
    }
}

module.exports = Manager;