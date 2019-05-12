"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { compose } = require("../../..");

describe("compose", () => {
  const testInputA = true;
  const testAToB = value => (value ? 1 : 0);
  const testBToC = value => (value === 1 ? "one" : "zero");

  describe("curried", () => {
    it("should convert type a to type c", () => {
      const expectedResult = testBToC(testAToB(testInputA));
      const actualResult = compose(testBToC)(testAToB)(testInputA);

      expect(expectedResult).to.eql(actualResult);
    });
  });

  describe("uncurried", () => {
    it("should convert type a to type c", () => {
      const expectedResult = testBToC(testAToB(testInputA));
      const actualResult = compose(testBToC, testAToB)(testInputA);

      expect(expectedResult).to.eql(actualResult);
    });
  });
});
