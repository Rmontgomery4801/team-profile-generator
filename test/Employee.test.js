

const Employee = require ('../lib/Employee');

test ('Employee criteria test', () => {
    const employee = new Employee ('Jim', 'jimh@gmail.com', '1');
    expect(employee.name).toBe('Jim');
    expect(employee.email).toBe('jimh@gmail.com');
    expect(employee.id).toBe('1');
});