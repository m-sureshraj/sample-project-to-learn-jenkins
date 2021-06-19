const { sayHello, upperCase } = require('./index');

describe('sayHello', () => {
  it('should say hello', () => {
    expect(sayHello()).toBe('Hell');
  });

  it('should format string to uppercase', () => {
    expect(upperCase('abc')).toBe('ABC');
  });
});
