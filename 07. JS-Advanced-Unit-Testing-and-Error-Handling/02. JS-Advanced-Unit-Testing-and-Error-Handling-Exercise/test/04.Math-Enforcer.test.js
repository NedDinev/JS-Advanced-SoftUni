const { expect } = require("chai");
const { addFive, subtractTen, sum } = require("../04.Math-Enforcer");

describe("add five", () => {
  it("add five to a positive integer", () => {
    expect(addFive(5)).to.equal(10);
    expect(addFive(1.5)).to.equal(6.5);
  });

  it("add five to a negative integer", () => {
    expect(addFive(-5)).to.equal(0);
    expect(addFive(-1.5)).to.equal(3.5);
  });

  it("should return undefined if the param is not an integer", () => {
    expect(addFive("test")).to.be.undefined;
    expect(addFive([])).to.be.undefined;
    expect(addFive({})).to.be.undefined;
  });
});

describe("subtract ten", () => {
  it("subtract ten from a positive integer", () => {
    expect(subtractTen(10)).to.equal(0);
    expect(subtractTen(50)).to.equal(40);
  });

  it("subtract ten from a negative integer", () => {
    expect(subtractTen(-10.5)).to.equal(-20.5);
    expect(subtractTen(-10)).to.equal(-20);
  });

  it("returns undefined if the param is not an integer", () => {
    expect(subtractTen("test")).to.be.undefined;
    expect(subtractTen([])).to.be.undefined;
    expect(subtractTen({})).to.be.undefined;
  });

  describe("sum of two integers", () => {
    it("returns the sum if params are integers", () => {
      expect(sum(10, 20)).to.equal(30);
      expect(sum(1.5, 2.5)).to.equal(4);
      expect(sum(-1.5, -2.5)).to.equal(-4);
    });
  });

  it("returns undefined if any of the params are NaN", () => {
    expect(sum([], {})).to.be.undefined;
    expect(sum("test", 2)).to.be.undefined;
    expect(sum(-2, "test")).to.be.undefined;
  });
});
