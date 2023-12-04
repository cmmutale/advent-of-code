const { test, expect } = require('@jest/globals')
const { processLine } = require('./parseFile.js')

test('Line Processing', () => {
    const input = '6si4xni5ne';
    const actualOutput = processLine(input)
    const expectedOutput = 65
    expect(actualOutput).toEqual(expectedOutput)
})
test('Line Processing 2', () => {
    const input = '69sixni4ne3';
    const actualOutput = processLine(input)
    const expectedOutput = 63
    expect(actualOutput).toEqual(expectedOutput)
})
test('Line Processing 3', () => {
    const input = 'ss69sixnine';
    const actualOutput = processLine(input)
    const expectedOutput = 69
    expect(actualOutput).toEqual(expectedOutput)
})
test('Line Processing 3', () => {
    const input = 'sdfadsfa';
    const actualOutput = processLine(input)
    const expectedOutput = NaN
    expect(actualOutput).toEqual(expectedOutput)
})