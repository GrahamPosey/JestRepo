const { expect } = require('@jest/globals')
const subtraction = require('./subtraction')

test('Make sure this subtracts the two numbers', () => {
    expect(subtraction(7, 5)).toBe(2)
})