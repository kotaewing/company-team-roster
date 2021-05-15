const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('should generate Employee object with name Dakota, id, and email', () => {
    const employee = new Employee('Dakota', 20, 'example@yahoo.com')

    expect(employee.name).toBe('Dakota');
    expect(employee.id).toBe(20);
    expect(employee.email).toBe('example@yahoo.com');
});

test('should return employee name', () => {
    const employee = new Employee('Dakota', 20, 'example@yahoo.com')

    expect(employee.getName()).toBe('Dakota')
});

test('should return employee id', () => {
    const employee = new Employee('Dakota', 20, 'example@yahoo.com')

    expect(employee.getId()).toBe(20)
});

test('should return employee email', () => {
    const employee = new Employee('Dakota', 20, 'example@yahoo.com')

    expect(employee.getEmail()).toBe('example@yahoo.com')
});