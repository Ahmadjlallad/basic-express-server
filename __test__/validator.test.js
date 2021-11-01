const nameValidator = require("../src/middleware/validator");
describe("test name validator middleware", () => {
  const next = jest.fn();
  test("should continue to next middleware when name query provided", () => {
    nameValidator({ query: { name: "ahmad" } }, {}, next);
    expect(next).toHaveBeenCalled();
  });
  test("should continue to next middleware when name query provided", () => {
    nameValidator({ query: { name: "ahmad" } }, {}, next);
    expect(next).toHaveBeenCalled();
  });
  test("should continue to next middleware when no query provided", () => {
    nameValidator({ query: {} }, {}, next);
    expect(next).toHaveBeenCalled();
  });
});
