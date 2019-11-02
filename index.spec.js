const { sayHello } = require('./index');

describe('sayHello', () => {
  it('should say hello', () => {
    expect(sayHello()).toBe('Hello');
  });
});
