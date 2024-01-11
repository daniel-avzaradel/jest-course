const {sum} = require('./sum');

test("testing sum", () => {
  expect(sum(4, 6)).toBe(10);
});
