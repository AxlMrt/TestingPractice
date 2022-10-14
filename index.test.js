import { capitalize, reverseStr, calcul, caesarCipher, analyzeArray } from './index';

test('work', () => {
    expect(1).toBe(1)
})

test('capitalize string', () => {
    expect(capitalize('HELLO WORLD')).toBe('Hello world');
})

test('reverse string', () => {
    expect(reverseStr('Hello world')).toBe('dlrow olleH');
})

test('calculator', () => {
    expect(calcul('+', 2, 2)).toBe(4);
    expect(calcul('-', 4, 2)).toBe(2);
    expect(calcul('*', 4, 2)).toBe(8);
    expect(calcul('/', 4, 2)).toBe(2);
})

test('caesar cipher', () => {
    expect(caesarCipher('Hello', 4)).toBe('LIPPS')
})

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6 });
})