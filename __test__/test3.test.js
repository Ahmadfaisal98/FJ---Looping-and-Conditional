const { createPyramid } = require('../task3');

expect.extend({
  toEqualPyramid(received, expected) {
    return {
      pass: received.trim() === expected.trim(),
      message: () =>
        `Expected:\n${expected}\nReceived:\n${received}`,
    };
  },
});

describe('createPyramid', () => {
  test('creates a pyramid with height 1', () => {
    expect(createPyramid(1)).toEqualPyramid('*\n');
  });

  test('creates a pyramid with height 3', () => {
    expect(createPyramid(3)).toEqualPyramid('  *\n ***\n*****\n');
  });

  test('creates a pyramid with height 5', () => {
    expect(createPyramid(5)).toEqualPyramid('    *\n   ***\n  *****\n *******\n*********\n');
  });

  test('creates a pyramid with height 0', () => {
    expect(createPyramid(0)).toEqualPyramid('');
  });

  test('creates a pyramid with height 7', () => {
    expect(createPyramid(7)).toEqualPyramid(
      '      *\n     ***\n    *****\n   *******\n  *********\n ***********\n*************\n'
    );
  });
});