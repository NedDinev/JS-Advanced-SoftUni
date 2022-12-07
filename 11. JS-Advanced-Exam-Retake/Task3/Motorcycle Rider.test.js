let motorcycleRider = require("./Motorcycle Rider.js");
let { assert } = require("chai");

describe("Tests for motorcycleRider", function () {
  describe("Test for licenseRestriction", () => {
    it("wrong type", () => {
      assert.throw(() => {
        motorcycleRider.licenseRestriction("pesho");
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.licenseRestriction(1);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.licenseRestriction([]);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.licenseRestriction({});
      }, "Invalid Information!");
    });
    it("correct input", () => {
      assert.equal(
        motorcycleRider.licenseRestriction("AM"),
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
      assert.equal(
        motorcycleRider.licenseRestriction("A1"),
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
      assert.equal(
        motorcycleRider.licenseRestriction("A2"),
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
      assert.equal(
        motorcycleRider.licenseRestriction("A"),
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });
  });
  describe("Test for motorcycleShowroom", () => {
    it("wrong type", () => {
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom("pesho", 100);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom("pesho", "pesho");
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom(100, 100);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom({}, 100);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], "pesho");
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], []);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], {});
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 10);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom([], 100);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom([], 100);
      }, "Invalid Information!");
    });
    it("correct input", () => {
      assert.equal(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 300),
        "There are 2 available motorcycles matching your criteria!"
      );
      assert.equal(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250),
        "There are 2 available motorcycles matching your criteria!"
      );
      assert.equal(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 600),
        "There are 3 available motorcycles matching your criteria!"
      );
      assert.equal(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 1000),
        "There are 3 available motorcycles matching your criteria!"
      );
      assert.equal(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 100),
        "There are 0 available motorcycles matching your criteria!"
      );
    });
  });
  describe("Test for otherSpendings", () => {
    it("wrong type", () => {
      assert.throw(() => {
        motorcycleRider.otherSpendings(["jacket"], ["engine oil"], "pesho");
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings(["jacket"], ["engine oil"], []);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings(["jacket"], ["engine oil"], 12);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings(["jacket"], ["engine oil"], {});
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings("pesho", ["engine oil"], true);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings(1, ["oil filter"], true);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings({}, ["engine oil"], true);
      }, "Invalid Information!");

      assert.throw(() => {
        motorcycleRider.otherSpendings(["helmet"], "pesho", true);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings(["helmet"], {}, true);
      }, "Invalid Information!");
      assert.throw(() => {
        motorcycleRider.otherSpendings(["jacket"], 12, true);
      }, "Invalid Information!");
    });
    it("correct input", () => {
      assert.equal(
        motorcycleRider.otherSpendings(["helmet"], ["oil filter"], false),
        "You spend $230.00 for equipment and consumables!"
      );
      assert.equal(
        motorcycleRider.otherSpendings(["jacket"], ["engine oil"], false),
        "You spend $70.00 for equipment and consumables!"
      );
      assert.equal(
        motorcycleRider.otherSpendings(
          ["helmet"],
          ["oil filter"],
          true
        ),
        "You spend $207.00 for equipment and consumables with 10% discount!"
      );
      assert.equal(
        motorcycleRider.otherSpendings(
          ["jacket"],
          ["oil filter"],
          true
        ),
        "You spend $27.00 for equipment and consumables with 10% discount!"
      );
      assert.equal(
        motorcycleRider.otherSpendings(
          ["jacket"],
          ["engine oil"],
          true
        ),
        "You spend $63.00 for equipment and consumables with 10% discount!"
      );
    });
  });
});
