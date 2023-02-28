const Manager = require ('../lib/manager');

test ('manger criteria test', () => {
    const manager = new Manager ('Jim', 'jimh@gmail.com', '1', '2');
    expect(manager.name).toBe('Jim');
    expect(manager.email).toBe('jimh@gmail.com');
    expect(manager.id).toBe('1');
    expect(manager.officeNumber).toBe('2');
});