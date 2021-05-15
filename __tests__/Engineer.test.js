const Engineer = require('../lib/Engineer');

test('should generate engineer with name, email, and id', () => {
    const engineer = new Engineer('Dakota', 20, 'example@yahoo.com');

    expect(engineer.name).toBe('Dakota')
    expect(engineer.id).toBe(20)
    expect(engineer.email).toBe('example@yahoo.com');
})