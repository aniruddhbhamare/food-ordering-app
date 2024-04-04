import sum from "../sum";

test("Sum function should be return the sum of the two numbers", () => {
  const result = sum(3, 5);

  // Assertion
  expect(result).toBe(8);
});
