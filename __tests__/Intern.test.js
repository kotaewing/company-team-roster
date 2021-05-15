const Intern = require('../lib/Intern');

test('should generate intern with name, email, and id', () => {
    const intern = new Intern('Dakota', 20, 'example@yahoo.com');

    expect(intern.name).toBe('Dakota')
    expect(intern.id).toBe(20)
    expect(intern.email).toBe('example@yahoo.com');
})

test('should generate intern with school', () => {
    const intern = new Intern('Dakota', 20, 'example@yahoo.com', 'University of Utah');

    expect(intern.school).toBe('University of Utah')
})

test('should return intern school', () => {
    const intern = new Intern('Dakota', 20, 'example@yahoo.com', 'University of Utah');

    expect(intern.getSchool()).toBe('University of Utah');
})

test('should return intern as role', () => {
    const intern = new Intern('Dakota', 20, 'example@yahoo.com', 'University of Utah');

    expect(intern.getRole()).toBe('Intern');
})