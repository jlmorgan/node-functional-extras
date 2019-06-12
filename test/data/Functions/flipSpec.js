"use strict";

// Third Party
const { expect } = require("chai");

// Project
const { flip, flipCurried } = require("../../..");

/* eslint-disable max-lines-per-function */
describe("flip", () => {
  describe("curried", () => {
    it("should flip arguments for function", () => {
      const testA = 2;
      const testB = 4;
      const testFunction = a => b => a - b;
      const expectedResult = testFunction(testA)(testB);
      const actualResult = flipCurried(testFunction)(testB)(testA);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should allow uncurried flipped arguments for function", () => {
      const testA = 2;
      const testB = 4;
      const testFunction = a => b => a - b;
      const expectedResult = testFunction(testA)(testB);
      const actualResult = flipCurried(testFunction)(testB, testA);

      expect(actualResult).to.eql(expectedResult);
    });
  });

  describe("uncurried", () => {
    it("should flip arguments for function", () => {
      const testA = 2;
      const testB = 4;
      const testFunction = (a, b) => a - b;
      const expectedResult = testFunction(testA, testB);
      const actualResult = flip(testFunction)(testB, testA);

      expect(actualResult).to.eql(expectedResult);
    });

    it("should allow curried flipped arguments for function", () => {
      const testA = 2;
      const testB = 4;
      const testFunction = (a, b) => a - b;
      const expectedResult = testFunction(testA, testB);
      const actualResult = flip(testFunction)(testB)(testA);

      expect(actualResult).to.eql(expectedResult);
    });
  });
});
