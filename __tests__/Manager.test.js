const Manager = require('../lib/Manager');

test('create a manager', () => {
    const manager = new Manager('Zach', 0, 'zach@test.com', '2165445038');
    
    expect(manager.officeNumber).toBe('2165445038');
});