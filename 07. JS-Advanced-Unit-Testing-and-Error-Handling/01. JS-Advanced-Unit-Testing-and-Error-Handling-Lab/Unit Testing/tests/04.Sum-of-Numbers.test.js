const { expect } = require("chai");
const {sum} = require(`../utils/04.Sum-of-Numbers`);

describe("sum", () => {
  it("should return correct result with array of numbers", () => {
    // Arrange
    let array = [1, 2, 3];
    //Act
    let result = sum(array);
    //Assert
    expect(result).to.be.equal(6);
  });
  it("should return NaN if input is not an array", () => {
    // Arrange
    let array = [1, NaN, 3];
    //Act
    let result = sum(array);
    //Assert
    expect(result).to.be.NaN;
  });
  it("should calculate correct result with array of mixed types", () => {
    // Arrange
    let mixed = [1, true, "2"];
    //Act
    let result = sum(mixed);
    //Assert
    expect(result).to.be.equal(4);
  });
});
