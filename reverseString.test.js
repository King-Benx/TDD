const reverseString = require('./reverseString');

describe('Reverse String', ()=>{
    test('can reverse string', ()=> {
        expect(reverseString('abc')).toBe('cba');
    });
})