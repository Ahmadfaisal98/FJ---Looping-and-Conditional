const { calculateValueWord } = require('../task4');

describe('Letter to Number Converter and Total Calculator', () => {
  test('calculateTotal calculates the sum of numeric values in a string', () => {
    expect(calculateValueWord('Hello')).toBe(78);
    expect(calculateValueWord('World')).toBe(98);
  });
  test('Input without a valid letter', () => {
    expect(calculateValueWord('123@ ')).toBe(0);
  });
});
