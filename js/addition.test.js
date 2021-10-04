const { expect } = require('@jest/globals')
const addition = require('./addition')

test('Make sure this adds the two numbers', () => {
    expect(addition(5, 7)).toBe(12)
})
