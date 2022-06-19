const Engineer = require('../lib/Engineer');

test('create an engineer', () => {
    const engineer = new Engineer('Zach', 0, 'zach@test.com', 'zachburkhart');
    
    expect(engineer.github).toBe('zachburkhart');
});