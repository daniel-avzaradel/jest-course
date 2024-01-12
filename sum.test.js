const {sum} = require('./sum');

test("testing sum", () => {
  expect(sum(4, 6)).toBe(10);
});

test("test", () => {
  expect(sum(1, 3)).toBe(4)
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
})

test("equal this object", () => {
  const data = { name: 'Daniel', age: 35 };
  data['profession'] = 'Software Engineer'
  expect(data).toEqual({name: 'Daniel', age: 35, profession: 'Software Engineer'})
})
