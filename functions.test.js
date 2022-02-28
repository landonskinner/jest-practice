const functions = require('./functions')

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

// not
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

// toEqual
test('User should be Landon Skinner object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Landon', lastName: 'Skinner'});
})

// less than, greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

// regex
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

// arrays
test('admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin')
})

// working with async data -> use assertions and return function
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})