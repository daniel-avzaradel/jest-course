const {sum} = require('./sum');

test("testing sum", () => {
  expect(sum(4, 6)).toBe(10);
});

test("test", () => {
    expect(sum(1, 3)).toBe(4)
})
