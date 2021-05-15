const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('should generate a manager with name, email, and id', () => {
    const manager = new Manager('Dakota', 20, 'example@yahoo.com');

    expect(manager.name).toBe('Dakota')
    expect(manager.id).toBe(20)
    expect(manager.email).toBe('example@yahoo.com');
});

test('should generate a manager with an office number', () => {
    const manager = new Manager('Dakota', 20, 'example@yahoo.com', 5);

    expect(manager.officeNum).toBe(5);
});

test('should return role as manager', () => {
    const manager = new Manager('Dakota', 20, 'example@yahoo.com', 5);

    expect(manager.getRole()).toBe('Manager');
});