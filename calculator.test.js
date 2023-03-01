const Calculator = require('./calculator');

describe('Calcular', () => {
    const calculator = new Calculator(1,2);
    test('can add two numbers', () => {
        expect(calculator.add()).toBe(3)
    });
    test('can subtract two numbers', () => {
        expect(calculator.subtract()).toBe(1);
    });
    test('can divide two numbers', () => {
        expect(calculator.divide()).toBe(2);
    });
    test('can multiply two numbers', () => {
        expect(calculator.multiply()).toBe(2);
    });
});
