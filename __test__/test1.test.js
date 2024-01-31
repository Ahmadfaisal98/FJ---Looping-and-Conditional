const { countOccurrences } = require('../task1');

describe('countOccurrences function', () => {
  test('should count the occurrences of the target number in the array - 1. score: 40', () => {
    expect(countOccurrences([1, 2, 3, 2, 4, 2], 2)).toBe(3);
  });

  test('should count the occurrences of the target number in the array - 2. score: 40', () => {
    expect(countOccurrences([3, 1, 2, 2, 5, 2, 6, 8], 8)).toBe(1);
  });

  test('should return 0 for no occurrences of the target number. score: 20', () => {
    expect(countOccurrences([1, 3, 5], 2)).toBe(0);
  });
});