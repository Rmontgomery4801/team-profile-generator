const Engineer = require ('../lib/Engineer');

test ('Engineer criteria test', () => {
    const engineer = new Engineer ('Jim', 'jimh@gmail.com', '1', 'jim');
    expect(engineer.name).toBe('Jim');
    expect(engineer.email).toBe('jimh@gmail.com');
    expect(engineer.id).toBe('1');
    expect(engineer.github).toBe('jim');
});