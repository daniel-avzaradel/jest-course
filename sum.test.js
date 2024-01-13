const {sum} = require('./sum');

test("Sum", () => {
  expect(sum(4, 6)).toBe(10);
});

test("To Equal", () => {
  let data = { name: "Daniel", age: 35 };
  data['profession'] = "Software Engineer";
  expect(data).toEqual({ name: "Daniel", age: 35, profession: "Software Engineer" });
});