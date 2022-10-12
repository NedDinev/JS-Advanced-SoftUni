let { assert } = require("chai");
let { isOddOrEven } = require("../02.Even-Or-Odd");

describe("Test isOddOrEven functionality", () => {
  describe("Test isOddOrEven with incorrect values", () => {
    it("Result should be undefine with array argument", () => {
      assert.equal(isOddOrEven([]), undefined);
    });

    it("Result should be undefine with empty object argument", () => {
      assert.equal(isOddOrEven({}), undefined);
    });
    it("Result should be undefine with object argument", () => {
      assert.equal(isOddOrEven({ a: 1, b: 2 }), undefined);
    });
    it("Result should be undefine with number argument", () => {
      assert.equal(isOddOrEven(1), undefined);
    });
    it("Result should be undefine with boolean argument", () => {
      assert.equal(isOddOrEven(true), undefined);
    });
  });

  describe("Test isOddOrEven with correct values", () => {
    it("Result should be even with a string with even amount of chars", () => {
      let str = "test";
      assert.equal(isOddOrEven(str), "even");
    });
    it("Result should be odd with a string with odd amount of chars", () => {
      let str = "!test";
      assert.equal(isOddOrEven(str), "odd");
    });
  });
});
