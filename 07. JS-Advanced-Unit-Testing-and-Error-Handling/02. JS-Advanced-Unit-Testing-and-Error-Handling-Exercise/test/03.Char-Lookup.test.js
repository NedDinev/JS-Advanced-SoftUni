let { assert } = require("chai");
let { lookupChar } = require("../03.Char-Lookup");

describe("test functionality of lookupChar", () => {
  it("Result should be undefine with one argument", () => {
    assert.equal(lookupChar("test"), undefined);
  });
  //first argument tests---------------------------------------------------
  it("Result should be undefine with first argument as a number", () => {
    assert.equal(lookupChar(1, 2), undefined);
  });
  it("Result should be undefine with first argument as object", () => {
    assert.equal(lookupChar({}, 2), undefined);
  });
  it("Result should be undefine with first argument as  array", () => {
    assert.equal(lookupChar([], 2), undefined);
  });
  it("Result should be undefine with first argument as bool", () => {
    assert.equal(lookupChar(true, 2), undefined);
  });
  //second argument tests---------------------------------------------------
  it("Result should be undefine with second argument as a number with floating point", () => {
    assert.equal(lookupChar("test", 2.5), undefined);
  });
  it("Result should be undefine with second argument as a string", () => {
    assert.equal(lookupChar("test", "test"), undefined);
  });
  it("Result should be undefine with second argument as object", () => {
    assert.equal(lookupChar("test", {}), undefined);
  });
  it("Result should be undefine with second argument as  array", () => {
    assert.equal(lookupChar("test", []), undefined);
  });
  it("Result should be undefine with second argument as bool", () => {
    assert.equal(lookupChar("test", true), undefined);
  });
  //incorrect index tests---------------------------------------------------
  it(`Result should be "Incorrect index" if string length is smaller than index`, () => {
    assert.equal(lookupChar("test", 2), "Incorrect index");
  });
  it(`Result should be "Incorrect index" if string length is equal index`, () => {
    assert.equal(lookupChar("fo", 2), "Incorrect index");
  });
  it(`Result should be "Incorrect index" if index is smaller than 0`, () => {
    assert.equal(lookupChar("test", -1), "Incorrect index");
  });
  //correct result test---------------------------------------------------
  it(`Result should be correct`, () => {
    let str = "test";
    let index = 2;
    assert.equal(lookupChar(str, index), str.charAt(index));
  });
});
