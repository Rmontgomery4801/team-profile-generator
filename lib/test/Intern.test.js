const Intern = require ('../lib/intern');

test ('Intern criteria test', () => {
    const intern = new Intern ('Jim', 'jimh@gmail.com', '1', 'University');
    expect(intern.name).toBe('Jim');
    expect(intern.email).toBe('jimh@gmail.com');
    expect(intern.id).toBe('1');
    expect(intern.school).toBe('University');
});