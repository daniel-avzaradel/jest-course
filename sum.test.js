const {sum, myFunction, fetchData} = require('./sum');

test("Sum", () => {
  expect(sum(4, 6)).toBe(10);
});

test("To Equal", () => {
  let data = { name: "Daniel", age: 35 };
  data['profession'] = "Software Engineer";
  expect(data).toEqual({ name: "Daniel", age: 35, profession: "Software Engineer" });
});

test("to be falsy", () => {
  let n = null;
  expect(n).toBeFalsy()
})

test("Zero is falsy", () => {
  let n = 0;
  expect(n).toBeFalsy()
})

test("To be truthy", () => {
  let n = 1;
  expect(n).toBeTruthy()
})

test("Throw an invalid input", () => {
  expect(() => {
    myFunction('invalidInput');
  }).toThrow()
})

test("fetch data async", done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error)
    }
  }

  fetchData(callback);
});