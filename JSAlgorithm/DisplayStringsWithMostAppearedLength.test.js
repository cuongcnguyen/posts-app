const DisplayStringsWithMostAppearedLength = require('./DisplayStringsWithMostAppearedLength');

test('Returns the strings with the most occurrent length', () => {
    const strings = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
    const expectedResult = ['ab', 'cd', 'gh'];
    expect(DisplayStringsWithMostAppearedLength(strings)).toEqual(expectedResult);
});

test('Returns an empty array when the input is an empty array', () => {
    const strings = [];
    const expectedResult = [];
    expect(DisplayStringsWithMostAppearedLength(strings)).toEqual(expectedResult);
});

test('Returns the single element when there is only one string in the array', () => {
    const strings = ['abc'];
    const expectedResult = ['abc'];
    expect(DisplayStringsWithMostAppearedLength(strings)).toEqual(expectedResult);
});

test('Returns all strings with the most common length when there are multiple lengths with the same frequency', () => {
    const strings = ['a', 'b', 'abc', 'def', 'gh', 'ij'];
    const expectedResult = ['a', 'b', 'abc', 'def', 'gh', 'ij'];
    expect(DisplayStringsWithMostAppearedLength(strings)).toEqual(expectedResult);
});

test('Returns all strings when all have the same length', () => {
    const strings = ['ab', 'cd', 'ef', 'gh'];
    const expectedResult = ['ab', 'cd', 'ef', 'gh'];
    expect(DisplayStringsWithMostAppearedLength(strings)).toEqual(expectedResult);
});
