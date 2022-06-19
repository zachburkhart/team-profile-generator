const Intern = require('../lib/Intern');

test('create an intern', () => {
    const intern = new Intern('Zach', 0, 'zach@test.com', 'case-western');
    
    expect(intern.school).toBe('case-western');
});