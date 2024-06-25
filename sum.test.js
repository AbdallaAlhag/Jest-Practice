import * as fnc from './sum';

test('Adds 1 + 2 to equal 3', () => {
    expect(fnc.sum(1, 2)).toBe(3);
});

test('Cap the first char in a string', () => {
    expect(fnc.capitalize('hello')).toMatch(/Hello/);
});

test('Reversing the string', () => {
    expect(fnc.reverseString('hello')).toMatch(/olleh/);
})

test('Calculator test', () => {
    expect(fnc.Calculator.add(2, 2)).toBe(4)
    expect(fnc.Calculator.subtract(2, 2)).toBe(0)
    expect(fnc.Calculator.divide(2, 2)).toBe(1)
    expect(fnc.Calculator.multiply(2, 2)).toBe(4)
});

test('Shift characters', () => {
    expect(fnc.caesarCipher('Hello, World!', 3)).toMatch(/Khoor, Zruog!/);
})


test('Analyze the array', () => {
    const obj = fnc.analyzeArray([1,8,3,4,2,6]);
    expect(obj.average).toBe(4)
    expect(obj.min).toBe(1)
    expect(obj.max).toBe(8)
    expect(obj.length).toBe(6)
});