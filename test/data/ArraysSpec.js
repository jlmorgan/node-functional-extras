"use strict";

// Third Party
const { expect } = require("chai");
const { v4: uuid } = require("uuid");

// Project
const { Arrays } = require("../..");

/* eslint-disable max-lines-per-function */
describe("Arrays", () => {
  describe("equals", () => {
    it("should throw an exception for non-Array second", () => {
      const testSecond = null;
      const testFirst = [];

      expect(() => Arrays.equals(testSecond)(testFirst)).to.throw(
        TypeError,
        "second must be an Array"
      );
    });

    it("should throw an exception for non-Array first", () => {
      const testSecond = [];
      const testFirst = null;

      expect(() => Arrays.equals(testSecond)(testFirst)).to.throw(
        TypeError,
        "first must be an Array"
      );
    });

    it("should return false for differing lengths", () => {
      const testSecond = [0, 1];
      const testFirst = [0];
      const actualResult = Arrays.equals(testSecond)(testFirst);

      expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return false for differing values", () => {
      const testSecond = [uuid(), uuid()];
      const testFirst = [uuid(), uuid()];
      const actualResult = Arrays.equals(testSecond)(testFirst);

      expect(actualResult).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it("should return true for same values", () => {
      const testValue1 = uuid();
      const testValue2 = uuid();
      const testSecond = [testValue1, testValue2];
      const testFirst = [testValue1, testValue2];
      const actualResult = Arrays.equals(testSecond)(testFirst);

      expect(actualResult).to.be.true; // eslint-disable-line no-unused-expressions
    });
  });
});
