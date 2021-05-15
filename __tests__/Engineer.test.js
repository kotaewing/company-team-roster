const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('should generate engineer with name, email, and id', () => {
    const engineer = new Engineer('Dakota', 20, 'example@yahoo.com');

    expect(engineer.name).toBe('Dakota')
    expect(engineer.id).toBe(20)
    expect(engineer.email).toBe('example@yahoo.com');
})

test('should generate engineer with github', () => {
    const engineer = new Engineer('Dakota', 20, 'example@yahoo.com', 'kotaewing');

    expect(engineer.github).toBe('kotaewing')
})

test('should return engineer github', () => {
    const engineer = new Engineer('Dakota', 20, 'example@yahoo.com', 'kotaewing');

    expect(engineer.getGithub()).toBe('kotaewing');
})

