const getStringLength = require('./stringLength');

describe('getStringLength', ()=>{
    test('valid string to return actual length', ()=>{
        expect(getStringLength('abc')).toBe(3);
    });
    test('no string to throw error', ()=>{
        expect(()=> {getStringLength('');}).toThrow('Invalid string length');
    });
    test('string longer than 10 to throw error', ()=>{
        expect(()=> {getStringLength('abcdefghijklmnopq');}).toThrow('Invalid string length');
    });
});