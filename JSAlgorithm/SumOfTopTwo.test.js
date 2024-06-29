const SumOfTopTwo = require('./SumOfTopTwo');

test('Returns the sum of the top two integers in an array', () => {
    const arr = [1, 4, 2, 3, 5];
    const expectedResult = 9;
    expect(SumOfTopTwo(arr)).toBe(expectedResult);
});

test('An array full of negative numbers', () => {
    const arr = [-1, -4, -2, -3, -5];
    const expectedResult = -3;
    expect(SumOfTopTwo(arr)).toBe(expectedResult);
});

test('Handles mixed positive and negative numbers correctly', () => {
    const arr = [1, -4, 2, -3, 5];
    const expectedResult = 7;
    expect(SumOfTopTwo(arr)).toBe(expectedResult);
});

test('When the array contains fewer than two elements', () => {
    const arr = [1];
    expect(() => SumOfTopTwo(arr)).toThrow('Array must contain at least two elements');
});

test('Handles arrays with exactly two elements', () => {
    const arr = [1, 4];
    const expectedResult = 5; 
    expect(SumOfTopTwo(arr)).toBe(expectedResult);
});

test('Handles arrays with multiple identical top elements', () => {
    const arr = [4, 4, 1, 2, 3];
    const expectedResult = 8; 
    expect(SumOfTopTwo(arr)).toBe(expectedResult);
});
