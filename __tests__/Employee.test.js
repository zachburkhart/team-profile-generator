const Employee = require('../lib/Employee');

test('create an employee', () => {
    const employee = new Employee('Zach', 0, 'zach@test.com');
    
    expect(employee.name).toBe('Zach');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

